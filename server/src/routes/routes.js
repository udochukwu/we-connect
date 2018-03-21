import express from 'express';

import BusinessController from '../controllers/businessController';

import ReviewController from '../controllers/reviewController';


// import BusinessValidation from '../middlewares/BusinessValidation';


const Router = express.Router();

const {
  getAllBusinesses,
  getBusinessById,
  createBusiness,
  updateBusiness,
  filterSearchByCategory,
  filterSearchByLocation,
  removeBusiness
} = BusinessController;

const { addReview, getAllReviews } = ReviewController;

Router.get('/businesses', filterSearchByLocation, filterSearchByCategory, getAllBusinesses);

Router.get('/businesses/:businessId', getBusinessById);

Router.post('/businesses', createBusiness);

Router.post('/businesses/:businessId', updateBusiness);

Router.delete('/businesses/:businessId', removeBusiness);

Router.post('/businesses/:businessId/reviews', addReview);

Router.get('/businesses/:businessId/reviews', getAllReviews);

export default Router;
