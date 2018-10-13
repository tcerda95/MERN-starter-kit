const logger = require('log4js').getLogger('comments');
const Comment = require('../model/comments');
const responseService = require('../services/response');
const ctrl = {};

ctrl.listComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    responseService.json(res, 200, comments);
  }
  catch (err) {
    logger.warn(err.message);
    responseService.json(res, 500, err);
  }
};

ctrl.createComment = async (req, res) => {
  try {
    logger.info('Creating comment');
    const comment = await Comment.create(req.body);
    responseService.json(res, 201, comment);
  }
  catch (err) {
    logger.warn(err.message);
    responseService.json(res, 400, err);
  }
};

ctrl.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    logger.info(`Deleting comment with id: ${id}`);
    
    await Comment.findByIdAndDelete(id);
    
    responseService.json(res, 204, {});
  }
  catch (err) {
    logger.warn(err.message);
    responseService.json(res, 400, err);
  }
};

module.exports = ctrl;
