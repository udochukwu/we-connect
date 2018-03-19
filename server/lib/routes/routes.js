'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _businessController = require('../controllers/businessController');

var _businessController2 = _interopRequireDefault(_businessController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import BusinessValidation from '../middlewares/BusinessValidation';


var Router = _express2.default.Router();

var getAllBusinesses = _businessController2.default.getAllBusinesses,
    getBusinessById = _businessController2.default.getBusinessById,
    createBusiness = _businessController2.default.createBusiness,
    updateBusiness = _businessController2.default.updateBusiness,
    filterSearchByCategory = _businessController2.default.filterSearchByCategory,
    filterSearchByLocation = _businessController2.default.filterSearchByLocation,
    removeBusiness = _businessController2.default.removeBusiness;


Router.get('/businesses', filterSearchByLocation, filterSearchByCategory, getAllBusinesses);

Router.get('/businesses/:businessId', getBusinessById);

Router.post('/businesses', createBusiness);

Router.post('/businesses/:businessId', updateBusiness);

Router.delete('/businesses/:businessId', removeBusiness);

exports.default = Router;