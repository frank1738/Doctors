import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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

    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    photo: {
      type: String,
    },

    ticketPrice: {
      type: Number,
    },
    specialization: {
      type: String,
    },
    qualifications: {
      type: Array,
    },
    expiriences: {
      type: Array,
    },
    bio: {
      type: String,
      maxLength: 50,
    },
    about: {
      type: String,
    },
    timeSlots: {
      type: Array,
    },
    reviews: {
      type: [{ type: mongoose.Types.ObjectId, ref: 'Review' }],
    },
    rating: {
      type: Number,
      default: 0,
    },
    totalRating: {
      type: Number,
      default: 0,
    },

    isApproved: {
      type: String,
      enum: ['pending', 'approved', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model('Doctor', DoctorSchema);
export default Doctor;
