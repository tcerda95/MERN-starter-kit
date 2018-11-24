import axios from 'axios';

const service = {};

service.getReviews = () => axios.get('/api/reviews');

service.createReview = review => axios.post('/api/reviews', review);

service.deleteReview = review => axios.delete(`/api/${review.id}`);

export default service;
