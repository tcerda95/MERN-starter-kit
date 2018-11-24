const logger = require('log4js').getLogger('reviews');
const Review = require('../model/reviews');
const responseService = require('../services/response');
const ctrl = {};

ctrl.listReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    responseService.json(res, 200, reviews);
  }
  catch (err) {
    logger.warn(err.message);
    responseService.json(res, 500, err);
  }
};

ctrl.getReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);

    responseService.json(res, 200, review);
  }
  catch (err) {
    logger.warn(err.message);
    responseService.json(res, 404, err);
  }
};

ctrl.createReview = async (req, res) => {
  try {
    logger.info('Creating review');
    const review = await Review.create(req.body);
    
    responseService.json(res, 201, review);
  }
  catch (err) {
    logger.warn(err.message);
    responseService.json(res, 400, err);
  }
};

ctrl.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    logger.info(`Deleting review with id: ${id}`);
    
    await Review.findByIdAndDelete(id);
    
    responseService.json(res, 204, {});
  }
  catch (err) {
    logger.warn(err.message);
    responseService.json(res, 400, err);
  }
};

module.exports = ctrl;
