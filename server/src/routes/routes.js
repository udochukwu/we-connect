import express from 'express';

import BusinessController from '../controllers/businessController';

const Router = express.Router();

const {
  getAllBusinesses
} = BusinessController;

Router.get('/businesses', getAllBusinesses);

export default Router;
