'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter as useNavigate } from 'next/navigation';
import { User, Mail, Lock, Save, AlertCircle, CheckCircle2, Loader2, Package, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import { getUserDetails, updateUserProfile } from '@/store/actions/userActions';
import { listMyOrders } from '@/store/actions/orderActions';
import { USER_UPDATE_PROFILE_RESET } from '@/store/constants/userConstants';
import HelpSupport from './HelpSupport';

const ProfilePage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [activeTab, setActiveTab] = useState('settings'); // 'settings' or 'orders'

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success, loading: updateLoading } = userUpdateProfile;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    useEffect(() => {
        if (!userInfo) {
            navigate('/');
        } else if (userInfo.isAdmin) {
            navigate('/admin/dashboard');
        } else {
            if (!user || !user.firstName || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetails('profile'));
                dispatch(listMyOrders());
            } else {
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setEmail(user.email);
            }
        }
    }, [dispatch, navigate, userInfo, user, success]);

    const submitHandler = (e) => {
        e.preventDefault();
        setMessage(null);
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(updateUserProfile({ id: user._id, firstName, lastName, email, password }));
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Account Settings</h1>
                        <p className="text-slate-500 mt-1">Manage your account preferences and order history</p>
                    </div>
                    <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'settings' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Profile Details
                        </button>
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'orders' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Order History
                        </button>
                        <button
                            onClick={() => setActiveTab('help')}
                            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'help' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Help & Support
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 text-white shadow-lg">
                                    <span className="text-3xl font-bold uppercase">{user?.firstName?.charAt(0) || user?.name?.charAt(0) || ''}</span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-800">{user?.name || ''}</h2>
                                <p className="text-slate-500 text-xs truncate max-w-full">{user?.email || ''}</p>
                                <div className="mt-4 inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">
                                    {user?.isAdmin ? 'Administrator' : 'Customer'}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-50 space-y-4">
                                <div className="flex items-center justify-between text-slate-600 text-sm">
                                    <span className="flex items-center gap-2"><Package size={16} /> Orders</span>
                                    <span className="font-bold text-slate-900">{orders?.length || 0}</span>
                                </div>
                                <div className="flex items-center justify-between text-slate-600 text-sm">
                                    <span className="flex items-center gap-2"><CreditCard size={16} /> Saved Cards</span>
                                    <span className="font-bold text-slate-900">0</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-xl text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-2">Need help?</h3>
                                <p className="text-slate-400 text-sm mb-4">Our support team is available 24/7 to help you with your orders.</p>
                                <button className="w-full py-2 bg-white text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                                    Contact Support
                                </button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10">
                                <User size={120} />
                            </div>
                        </div> */}
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {activeTab === 'settings' ? (
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-800">Personal Information</h2>
                                        <p className="text-slate-500 text-sm mt-1">Update your basic profile info and email</p>
                                    </div>
                                    <User className="text-slate-200" size={32} />
                                </div>

                                <form onSubmit={submitHandler} className="p-6 space-y-6">
                                    {message && (
                                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            {message}
                                        </div>
                                    )}
                                    {error && (
                                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            {error}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="p-3 bg-green-50 border border-green-200 text-green-600 text-sm rounded-lg flex items-center gap-2">
                                            <CheckCircle2 size={16} />
                                            Profile Updated Successfully
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">First Name</label>
                                            <input
                                                type="text"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                            <input
                                                type="text"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100">
                                        <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">Security Settings</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">New Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Confirm Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading || updateLoading}
                                            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:shadow-lg disabled:opacity-50 active:scale-95"
                                        >
                                            {updateLoading || loading ? (
                                                <Loader2 className="animate-spin" size={20} />
                                            ) : (
                                                <>
                                                    <Save size={18} />
                                                    Save Changes
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : activeTab === 'orders' ? (
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-800">Order History</h2>
                                        <p className="text-slate-500 text-sm mt-1">View and track all your previous purchases</p>
                                    </div>
                                    <Package className="text-slate-200" size={32} />
                                </div>

                                <div className="p-6">
                                    {loadingOrders ? (
                                        <div className="flex flex-col items-center justify-center py-12">
                                            <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
                                            <p className="text-slate-500">Fetching your orders...</p>
                                        </div>
                                    ) : errorOrders ? (
                                        <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3">
                                            <AlertCircle size={20} />
                                            {errorOrders}
                                        </div>
                                    ) : orders && orders.length === 0 ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Package className="text-slate-400" size={32} />
                                            </div>
                                            <h3 className="text-slate-800 font-bold text-lg">No orders found</h3>
                                            <p className="text-slate-500 mb-6">Looks like you haven't placed any orders yet.</p>
                                            <Link
                                                href="/"
                                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
                                            >
                                                Start Shopping
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-slate-100">
                                                        <th className="pb-4 pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Order ID</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Total</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                                        <th className="pb-4 pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    {orders && orders.map((order) => (
                                                        <tr key={order._id} className="group hover:bg-slate-50/50 transition-colors">
                                                            <td className="py-4 font-mono text-sm text-slate-600">{order._id.toUpperCase()}</td>
                                                            <td className="py-4">
                                                                <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                                    <Calendar size={14} />
                                                                    {new Date(order.createdAt).toLocaleDateString()}
                                                                </div>
                                                            </td>
                                                            <td className="py-4 font-bold text-slate-800">${order.totalPrice.toFixed(2)}</td>
                                                            <td className="py-4">
                                                                {order.isPaid ? (
                                                                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase">Paid</span>
                                                                ) : (
                                                                    <span className="px-2.5 py-1 bg-red-50 text-red-700 text-[10px] font-bold rounded-full uppercase">Failed</span>
                                                                )}
                                                            </td>
                                                            <td className="py-4 text-right">
                                                                <Link
                                                                    href={`/order/${order._id}`}
                                                                    className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                                                >
                                                                    Details
                                                                    <ChevronRight size={16} />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : activeTab === 'help' ? (
                            <HelpSupport />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
