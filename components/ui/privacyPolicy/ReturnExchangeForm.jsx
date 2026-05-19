'use client';
import React, { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

const ReturnExchangeForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    orderNumber: "",
    orderDate: "",
    deliveryDate: "",
    productName: "",
    
    reason: "",
    itemCondition: "",
    resolution: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        type: "return-exchange",
        ...formData
      });

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        orderNumber: "",
        orderDate: "",
        deliveryDate: "",
        productName: "",
        reason: "",
        itemCondition: "",
        resolution: "",
        additionalDetails: "",
      });
      alert("Return/Exchange request submitted successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white border border-gray-200 rounded p-6 space-y-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold text-gray-900">Customer Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">Order Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="orderNumber"
          placeholder="Order Number"
          value={formData.orderNumber}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="date"
          name="orderDate"
          placeholder="Order Date"
          value={formData.orderDate}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="date"
          name="deliveryDate"
          placeholder="Delivery Date"
          value={formData.deliveryDate}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">Product Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name / Model"
          value={formData.productName}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        
      </div>

      <h3 className="text-lg font-semibold text-gray-900">Reason for Return</h3>
      <select
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        required
        aria-label="Reason for return"
        className="border border-gray-300 rounded px-3 py-2 w-full"
      >
        <option value="">Select Reason</option>
        <option value="wrongItem">Received the wrong item</option>
        <option value="damaged">Item arrived damaged</option>
        <option value="defective">Item is defective / not functioning</option>
        <option value="missingParts">Missing parts or accessories</option>
        <option value="orderedByMistake">Ordered by mistake</option>
        <option value="noLongerNeeded">No longer needed</option>
        <option value="other">Other</option>
      </select>

      <h3 className="text-lg font-semibold text-gray-900">Item Condition</h3>
      <select
        name="itemCondition"
        value={formData.itemCondition}
        onChange={handleChange}
        required
        aria-label="Item condition"
        className="border border-gray-300 rounded px-3 py-2 w-full"
      >
        <option value="">Select Condition</option>
        <option value="unopened">Unopened / sealed</option>
        <option value="openedUnused">Opened but unused</option>
        <option value="used">Used</option>
        <option value="damaged">Damaged</option>
      </select>

      <h3 className="text-lg font-semibold text-gray-900">Preferred Resolution</h3>
      <select
        name="resolution"
        value={formData.resolution}
        onChange={handleChange}
        required
        aria-label="Preferred resolution"
        className="border border-gray-300 rounded px-3 py-2 w-full"
      >
        <option value="">Select Resolution</option>
        <option value="refund">Refund</option>
        <option value="replacement">Replacement (only for defective/incorrect items)</option>
        <option value="storeCredit">Store Credit</option>
      </select>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Additional Details (optional)</label>
        <textarea
          name="additionalDetails"
          value={formData.additionalDetails}
          onChange={handleChange}
          placeholder="Additional details..."
          className="border border-gray-300 rounded px-3 py-2 w-full"
          rows="4"
        ></textarea>
      </div>

      <div className="flex flex-col gap-2">
      {error && <div className="text-red-500 text-sm ">{error}</div>}
      {success && <div className="text-green-600 text-sm ">Request sent successfully!</div>}
      
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-700 transition flex items-center justify-center gap-2 disabled:bg-indigo-400"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin"/> : null}
        Submit Return Request
      </button>
      </div>
    </form>
  );
};

export default ReturnExchangeForm;
