const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/reviews', reviewsCtrl.listReviews);
router.get('/reviews/:id', reviewsCtrl.getReview);
router.post('/reviews', reviewsCtrl.createReview);
router.delete('/reviews/:id', reviewsCtrl.deleteReview);

module.exports = router;
