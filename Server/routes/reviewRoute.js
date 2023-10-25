import { Router } from 'express';
import { isAuthenticated } from '../middleware/isAuth.js';
import { checkUserRole } from '../middleware/checkRole.js';
import {
  getAllReviews,
  createReview,
} from '../controllers/reviewController.js';

const reviewRouter = Router({ mergeParams: true });

reviewRouter
  .route('/')
  .get(getAllReviews)
  .post(isAuthenticated, checkUserRole('patient'), createReview);

export default reviewRouter;
