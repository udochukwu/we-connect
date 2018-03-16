import express from 'express';

import BusinessController from '../controllers/businessController';

const Router = express.Router();

const {
  getAllBusinesses,
  getBusinessById,
  createBusiness,
  updateBusiness
} = BusinessController;

Router.get('/businesses', getAllBusinesses);

Router.get('/businesses/:businessId', getBusinessById);

Router.post('/businesses', createBusiness);

Router.post('/businesses/:businessId', updateBusiness);


export default Router;
