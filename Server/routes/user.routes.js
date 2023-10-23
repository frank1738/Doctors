import { Router } from 'express';
import { isAuthenticated } from '../middleware/isAuth.js';
import { checkUserRole } from '../middleware/checkRole.js';

import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const userRouter = Router();

userRouter.get('/', checkUserRole('admin'), getAllUsers);
userRouter.get(
  '/:id',
  isAuthenticated,
  checkUserRole('patient'),
  getSingleUser
);
userRouter.put('/:id', isAuthenticated, updateUser);
userRouter.delete(
  '/:id',
  isAuthenticated,
  checkUserRole('patient'),
  deleteUser
);

export default userRouter;
