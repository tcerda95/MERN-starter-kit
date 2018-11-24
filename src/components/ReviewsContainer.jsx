import React, { Component } from 'react';
import ReviewsList from './ReviewsList';
import ReviewForm from './ReviewForm';
import apiService from '../services/apiService';

export default class ReviewsContainer extends Component {
  state = {
    reviews: [],
    reviewValue: undefined,
    submitting: false
  }

  async componentDidMount() {
    const response = await apiService.getReviews();
    const reviews = response.data;

    this.setState({ reviews });
  }

  handleChange = reviewValue => {
    this.setState({ reviewValue });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { reviews, reviewValue } = this.state;

    this.setState({ submitting: true, reviewValue: undefined });

    const response = await apiService.createReview(reviewValue);
    const newReviews = [...reviews, response.data];

    this.setState({ submitting: false, reviews: newReviews });
  }

  render() {
    const { reviews, reviewValue, submitting } = this.state;

    return (
      <div>
        <h1>Reviews</h1>
        <ReviewsList reviews={reviews} />
        <ReviewForm value={reviewValue} submitting={submitting} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
