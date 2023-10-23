import User from '../models/userModel.js';

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Exclude specific fields like "password," "createdAt," "updatedAt," and "__v"
    const {
      password,
      createdAt,
      updatedAt,
      __v,
      ...updatedUserWithoutExtraFields
    } = updatedUser.toObject();

    res.status(200).json({
      success: true,
      message: 'User Updated Successfully',
      updatedUser: updatedUserWithoutExtraFields,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update User' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.findByIdAndDelete(id);
    res
      .status(201)
      .json({ success: true, message: 'User Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete User' });
  }
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select(
      '-password -email -createdAt -updatedAt -__v'
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select(
      '-password -email -createdAt -updatedAt -__v'
    );
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Users' });
  }
};
