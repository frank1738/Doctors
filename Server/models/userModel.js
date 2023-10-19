import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['patient', 'admin'],
      default: 'patient',
    },
    photo: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    bloodType: { type: String },
    appointments: [{ type: mongoose.Types.ObjectId, ref: 'Appointment' }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
