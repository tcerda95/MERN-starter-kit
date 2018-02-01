const Comment = require('../model/comments');
const responseService = require('../services/response');
const ctrl = {};

ctrl.listComments = (req, res) => {
    Comment.find((err, comments) => {
        if (err)
            responseService.json(res, 500, err);
        else
            responseService.json(res, 200, comments);
    });
};

ctrl.createComment = (req, res) => {
    Comment.create(req.body, (err, comment) => {
        if (err)
            responseService.json(res, 400, err);
        else
            responseService.json(res, 201, comment);
    });
};

module.exports = ctrl;