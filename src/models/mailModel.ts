import mongoose, { Schema } from 'mongoose';
const EmailSchema = new Schema(
  {
    email: String,
    subject: String,
    message: String,
  },
  {
    timestamps: true,
  },
);
const EmailData =
  mongoose.models.EmailData || mongoose.model('EmailData', EmailSchema);

export default EmailData;
