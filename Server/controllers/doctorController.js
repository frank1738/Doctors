import Doctor from '../models/doctorModel.js';

export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Exclude specific fields like "password," "createdAt," "updatedAt," and "__v"
    const {
      password,
      createdAt,
      updatedAt,
      __v,
      ...updatedDoctorWithoutExtraFields
    } = updatedDoctor.toObject();

    res.status(200).json({
      success: true,
      message: 'Doctor Updated Successfully',
      updatedUser: updatedDoctorWithoutExtraFields,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update Doctor' });
  }
};

export const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await Doctor.findByIdAndDelete(id);
    res
      .status(201)
      .json({ success: true, message: 'Doctor Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete Doctor' });
  }
};

export const getSingleDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id)
      .populate('reviews')
      .select('-password -email -createdAt -updatedAt -__v');
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json({ success: true, doctor });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    let doctors;
    const { query } = req.query;
    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved',
        $or: [{ name: { $regex: query, $options: 'i' } }],
      }).select('-password -email -createdAt -updatedAt -__v');
    } else {
      doctors = await Doctor.find().select(
        '-password -email -createdAt -updatedAt -__v'
      );
    }

    res.status(200).json({ success: true, doctors });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch doctors' });
  }
};
