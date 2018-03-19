'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dummyDb = require('../dummyDb');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BusinessController
 *
 * @description CRUD operations on Business
 *
 */
var BusinessController = function () {
    function BusinessController() {
        _classCallCheck(this, BusinessController);
    }

    _createClass(BusinessController, null, [{
        key: 'getAllBusinesses',


        /**
           * @static
           *
           *
           * @param {object} req - The request payload sent to the router
           * @param {object} res - The response payload sent back from the controller
           *
           * @returns {object} - status Message and list of all businesses
           *
           * @memberOf BusinessController
           */
        value: function getAllBusinesses(req, res) {

            if (_dummyDb.businesses.length === 0) {

                return res.status(404).json({ message: 'No business available at this time', businesses: _dummyDb.businesses });
            }

            return res.json({ message: 'business list loaded successfully', businesses: _dummyDb.businesses });
        }

        /**
           * @static
           *
           *
           * @param {object} req - The request payload sent to the router
           * @param {object} res - The response payload sent back from the controller
           *
           * @returns {object} - status Message and the particul businesses by id.
           *
           * @memberOf BusinessController
           */

    }, {
        key: 'getBusinessById',
        value: function getBusinessById(req, res) {

            var id = req.params.businessId;
            var business = _dummyDb.businesses.find(function (businessItem) {
                return +businessItem.id === +id;
            });
            if (!business) {
                return res.status(404).json({ message: 'Business with businessId ' + id + ' does not exist' });
            }
            return res.json({ message: 'Business search was successful', business: business });
        }

        /**
           * @static
           *
           *
           * @param {object} req - The request payload sent to the router
           * @param {object} res - The response payload sent back from the controller
           *
           * @returns {object} - status Message and the particular businesses created.
           *
           * @memberOf BusinessController
           */

    }, {
        key: 'createBusiness',
        value: function createBusiness(req, res) {

            var id = _dummyDb.businesses.length === 0 ? 1 : _dummyDb.businesses.length + 1;
            var _req$body = req.body,
                userId = _req$body.userId,
                name = _req$body.name,
                description = _req$body.description,
                category = _req$body.category,
                location = _req$body.location;


            var newBusiness = {
                id: id,
                userId: userId,
                name: name,
                description: description,
                category: category,
                location: location,
                reviews: []
            };
            _dummyDb.businesses.push(newBusiness);
            return res.status(201).send({ message: 'business successfully added', newBusiness: newBusiness });
        }

        /**
           * @static
           *
           *
           * @param {object} req - The request payload sent to the router
           * @param {object} res - The response payload sent back from the controller
           *
           * @returns {object} - status Message and the particular updated businesses created.
           *
           * @memberOf BusinessController
           */

    }, {
        key: 'updateBusiness',
        value: function updateBusiness(req, res) {

            var id = req.params.businessId;

            var business = _dummyDb.businesses.find(function (businessItem) {
                return +businessItem.id === +id;
            });

            if (!business) {
                return res.status(404).json({ message: 'Business with businessId ' + id + ' does not exist!' });
            }

            var businessIndex = _dummyDb.businesses.indexOf(business);

            var _req$body2 = req.body,
                name = _req$body2.name,
                description = _req$body2.description,
                category = _req$body2.category,
                location = _req$body2.location;


            if (name) {

                business.name = name;
            }

            if (description) {

                business.description = description;
            }

            if (category) {

                business.category = category;
            }

            if (location) {

                business.location = location;
            }

            _dummyDb.businesses[businessIndex] = business;

            return res.json({ message: 'business updated successfully', business: business });
        }

        /**
           * @static
           *
           *
           * @param {object} req - The request payload sent to the router
           * @param {object} res - The response payload sent back from the controller
           *
           * @returns {object} - status Message showing that business has been deleted.
           *
           * @memberOf BusinessController
           */

    }, {
        key: 'removeBusiness',
        value: function removeBusiness(req, res) {

            var id = req.params.businessId;
            var business = _dummyDb.businesses.find(function (businessItem) {
                return +businessItem.id === +id;
            });

            if (!business) {
                return res.status(404).json({ message: 'business with businessId ' + id + ' does not exist' });
            }

            _dummyDb.businesses.splice(_dummyDb.businesses.indexOf(business), 1);
            return res.status(204).json({ message: 'business with businessId ' + id + ' was deleted successfully' });
        }

        /**
           * @static
           *
           *
           * @param {object} req - The request payload sent to the router
           * @param {object} res - The response payload sent back from the controller
           * @param {object} next - This forwards request to the next controller in the stack
           *
           * @returns {object} - status Message showing that business has been deleted.
           *
           * @memberOf BusinessController
           */

    }, {
        key: 'filterSearchByLocation',
        value: function filterSearchByLocation(req, res, next) {
            var location = req.query.location;


            if (location) {
                var result = _dummyDb.businesses.filter(function (businessItem) {
                    return businessItem.location === location;
                });

                if (result.length === 0) {
                    return res.status(404).json({ message: 'Business under location ' + location + ' not found' });
                }

                return res.status(200).json({ message: 'Search was successful', result: result });
            }

            return next();
        }

        /**
           * @static
           *
           *
           * @description - This method filters search results by category.
           *
           * @param {object} req - The request payload sent to the router
           * @param {object} res - The response payload sent back from the controller
           * @param {object} next - This forwards request to the next controller in the stack
           *
           * @returns {object} - status Message showing that business has been deleted.
           *
           * @memberOf BusinessController
           */

    }, {
        key: 'filterSearchByCategory',
        value: function filterSearchByCategory(req, res, next) {
            var category = req.query.category;


            if (category) {
                var result = _dummyDb.businesses.filter(function (businessItem) {
                    return businessItem.category === category;
                });

                if (result.length === 0) {
                    return res.status(404).json({ message: 'Business under category ' + category + ' not found!' });
                }

                return res.status(200).json({ message: 'Search was successful', result: result });
            }

            next();
        }
    }]);

    return BusinessController;
}();

exports.default = BusinessController;