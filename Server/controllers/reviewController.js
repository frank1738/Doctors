import Review from '../models/ReviewModel.js';
import Doctor from '../models/doctorModel.js';

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

export const createReview = async (req, res) => {
  try {
    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    if (!req.body.user) req.body.user = req.user.id;
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });

    res.status(201).json({
      success: true,
      message: 'review Submitted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};
