'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _businessController = require('../controllers/businessController');

var _businessController2 = _interopRequireDefault(_businessController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();

var getAllBusinesses = _businessController2.default.getAllBusinesses,
    getBusinessById = _businessController2.default.getBusinessById,
    createBusiness = _businessController2.default.createBusiness,
    updateBusiness = _businessController2.default.updateBusiness;


Router.get('/businesses', getAllBusinesses);

Router.get('/businesses/:businessId', getBusinessById);

Router.post('/businesses', createBusiness);

Router.post('/businesses/:businessId', updateBusiness);

exports.default = Router;