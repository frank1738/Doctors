import mongoose from 'mongoose';
import Doctor from './doctorModel.js';

const ReviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: 'Doctor',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

ReviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

ReviewSchema.statics.calcAvgRating = async function (doctorId) {
  const statics = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: '$doctor',
        numOfRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: statics[0].numOfRating,
    averageRating: statics[0].avgRating,
  });
};

ReviewSchema.post('save', function () {
  this.constructor.calcAvgRating(this.doctor);
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
