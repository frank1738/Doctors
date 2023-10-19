import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import Doctor from '../models/doctorModel.js';
import passport from 'passport';

export const registerUser = async (req, res) => {
  try {
    const { name, username, email, password, role, photo, gender } = req.body;

    const UserModel = role === 'patient' ? User : Doctor;
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      username,
      email,
      password: hashedPassword,
      role,
      photo,
      gender,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: 'User created successifully',
      savedUser,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loginUser = (req, res, next) => {
  try {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return res.status(500).json({ msg: err.message });
      }
      if (!user) {
        return res.status(401).json({ msg: info.message });
      }

      // Log in the user

      req.logIn(user, (loginErr) => {
        if (loginErr) {
          return res.status(500).json({ msg: loginErr.message });
        }
        // User is authenticated and logged in successfully
        return res.status(200).json({ msg: 'Login successful', user });
      });
    })(req, res, next);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logOutUser = (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ msg: err.message });
      }
      res.status(200).json({ msg: 'Logout successful' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
