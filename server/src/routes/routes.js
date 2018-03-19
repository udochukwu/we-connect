import express from 'express';

import BusinessController from '../controllers/businessController';

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

Router.get('/businesses', filterSearchByLocation, filterSearchByCategory, getAllBusinesses);

Router.get('/businesses/:businessId', getBusinessById);

Router.post('/businesses', createBusiness);

Router.post('/businesses/:businessId', updateBusiness);

Router.delete('/businesses/:businessId', removeBusiness);

export default Router;
