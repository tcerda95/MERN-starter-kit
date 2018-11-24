import React, { Component } from 'react';
import ReviewsList from './ReviewsList';
import ReviewForm from './ReviewForm';
import apiService from '../services/apiService';

export default class ReviewsContainer extends Component {
  state = {
    reviews: [],
    reviewValue: null,
    submitting: false
  }

  async componentDidMount() {
    const response = await apiService.getReviews();
    const reviews = response.data;

    this.setState({ reviews });
  }

  render() {
    const { reviews, reviewValue, submitting } = this.state;

    return (
      <div>
        <h1>Reviews</h1>
        <ReviewsList reviews={reviews} />
        <ReviewForm value={reviewValue} submitting={submitting} />
      </div>
    );
  }
}
