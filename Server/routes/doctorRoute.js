import { Router } from 'express';
import { isAuthenticated } from '../middleware/isAuth.js';
import { checkUserRole } from '../middleware/checkRole.js';
import {
  updateDoctor,
  getAllDoctors,
  getSingleDoctor,
  deleteDoctor,
} from '../controllers/doctorController.js';

const doctorRouter = Router();
doctorRouter.get('/', getAllDoctors);
doctorRouter.get('/:id', getSingleDoctor);
doctorRouter.put(
  '/:id',
  isAuthenticated,
  checkUserRole('doctor'),
  updateDoctor
);
doctorRouter.delete(
  '/:id',
  isAuthenticated,
  checkUserRole('doctor'),
  deleteDoctor
);

export default doctorRouter;
