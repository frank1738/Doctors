import { Router } from 'express';
import {
  registerUser,
  loginUser,
  logOutUser,
} from '../controllers/authController.js';
import { isAuthenticated } from '../middleware/isAuth.js';

const authRoute = Router();

authRoute.post('/register', registerUser);
authRoute.post('/login', loginUser);
authRoute.post('/logout', logOutUser);
authRoute.get('/home', isAuthenticated, (req, res) => {
  res.json({ msg: 'welcome home' });
});

export default authRoute;
