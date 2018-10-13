const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.get('/comments', commentsCtrl.listComments);
router.post('/comments', commentsCtrl.createComment);
router.delete('/comments/:id', commentsCtrl.deleteComment);

module.exports = router;
