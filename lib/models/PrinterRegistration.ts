import mongoose from 'mongoose';

const printerRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    model: { type: String, required: true },
    agree: { type: Boolean, default: true }
}, {
    timestamps: true
});

const PrinterRegistration = mongoose.models.PrinterRegistration || mongoose.model('PrinterRegistration', printerRegistrationSchema);
export default PrinterRegistration;


