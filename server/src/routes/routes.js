import express from 'express';

import BusinessController from '../controllers/businessController';

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

Router.get('/businesses', getAllBusinesses);

Router.get('/businesses/:businessId', filterSearchByLocation, filterSearchByCategory, getBusinessById);

Router.post('/businesses', createBusiness);

Router.post('/businesses/:businessId', updateBusiness);

Router.delete('/businesses/:businessId', removeBusiness);

export default Router;
