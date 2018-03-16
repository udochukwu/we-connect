

import { businesses } from '../dummyDb';

/**
 * @class BusinessController
 *
 * @description CRUD operations on Business
 *
 */
class BusinessController {

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
  static getAllBusinesses(req, res) {

    if (businesses.length === 0) {

      return res.status(404).json({ message: 'No business available at this time', businesses });

    }

    return res.json({ message: 'business list loaded successfully', businesses });

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
  static getBusinessById(req, res) {

    const id = req.params.businessId;
    const business = businesses.find(businessItem => +businessItem.id === +id);
    if (!business) {
      return res.status(404).json({ message: `Business with businessId ${id} does not exist` });
    }
    return res.json({ message: 'Business search was successful', business });
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
  static createBusiness(req, res) {

    const id = businesses.length === 0 ? 1 : businesses.length + 1;
    const {
      userId,
      description,
      category,
      location
    } = req.body;

    const newBusiness = {
      id,
      userId,
      description,
      category,
      location,
      reviews: []
    };
    businesses.push(newBusiness);
    return res.status(201).send({ message: 'business successfully added', newBusiness });
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
  static updateBusiness(req, res) {

    const id = req.params.businessId;

    const business = businesses.find(businessItem => +businessItem.id === +id);

    if (!business) {

      return res.status(404).json({ message: `Business with businessId ${id} does not exist!` });

    }

    const businessIndex = businesses.indexOf(business);

    const {

      name,
      description,
      category,
      location
    } = req.body;

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

    businesses[businessIndex] = business;

    return res.json({ message: 'business updated successfully', business });

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
  static removeBusiness(req, res) {

    const id = req.params.businessId;

    const business = businesses.find(businessItem => +businessItem.businessId === +id);

    if (!business) {

      return res.status(404).json({ message: `business with businessId ${id} does not exist` });

    }


    businesses.splice(businesses.indexOf(business), 1);

    return res.status(204).json({ message: `business with businessId ${id} was deleted successfully` });


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
  static filterSearchByLocation(req, res, next) {

    const { location } = req.query;

    if (location) {

      const searchBusinessResults = businesses.filter(businessItem =>

        businessItem.location === location);

      if (searchBusinessResults.length === 0) {

        return res.status(404).json({ message: `Business under location ${location} not found` });

      }

      return res.status(200).json({ message: 'Search was successful', searchBusinessResults });


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
  static filterSearchByCategory(req, res, next) {

    const { category } = req.query;

    if (category) {

      const searchBusinessResults = businesses.filter(businessItem =>

        businessItem.category === category);

      if (searchBusinessResults.length === 0) {

        return res.status(404).json({ message: `Business under category ${category} not found!` });

      }

      return res.status(200).json({ message: 'Search was successful', searchBusinessResults });


    }

    next();

  }

}


export default BusinessController;
