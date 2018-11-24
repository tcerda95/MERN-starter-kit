import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ReviewsList from './ReviewsList';
import ReviewForm from './ReviewForm';
import apiService from '../services/apiService';
import '../styles/ReviewsContainer.scss';

export default class ReviewsContainer extends Component {
  state = {
    reviews: [],
    reviewValue: undefined,
    submitting: false
  }

  async componentDidMount() {
    try {
      const response = await apiService.getReviews();
      const reviews = response.data;

      this.setState({ reviews });      
    }
    catch (error) {
      console.error(error);
    }
  }

  handleDelete = async review => {
    try {
      const newReviews = this.state.reviews.filter(r => r.id !== review.id);
      await apiService.deleteReview(review);
      this.setState({ reviews: newReviews });
    }
    catch (error) {
      console.error(error);
    }
  }

  handleChange = reviewValue => {
    this.setState({ reviewValue });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { reviews, reviewValue } = this.state;

    this.setState({ submitting: true, reviewValue: undefined });

    // persist event in order to reset form after submit. See https://reactjs.org/docs/events.html#event-pooling
    event.persist();

    const response = await apiService.createReview(reviewValue);
    const newReviews = [...reviews, response.data];

    event.target.reset();
    
    this.setState({ submitting: false, reviews: newReviews });
  }

  render() {
    const { reviews, reviewValue, submitting } = this.state;

    return (
      <Container className="reviews-container">
        {reviews.length > 0 && <h1>Reviews</h1>}
        <ReviewsList reviews={reviews} onDelete={this.handleDelete} />
        <ReviewForm value={reviewValue} submitting={submitting} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </Container>
    );
  }
}
