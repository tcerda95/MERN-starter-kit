const Comment = require('../model/comments');
const responseService = require('../services/response');
const ctrl = {};

ctrl.listComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    responseService.json(res, 200, comments);
  }
  catch (err) {
    responseService.json(res, 500, err);
  }
};

ctrl.createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    responseService.json(res, 201, comment);
  }
  catch (err) {
    responseService.json(res, 400, err);
  }
};

module.exports = ctrl;