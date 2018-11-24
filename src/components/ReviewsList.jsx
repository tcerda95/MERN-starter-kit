import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => (
  <ul>
    {reviews.map(r => <ReviewItem key={r.id} review={r} />)}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

const ReviewItem = ({ review }) => {
  const { score, fullName, text } = review;
  
  return (
    <li>
      <span>{score}</span>
      <div>
        <h2>{fullName}</h2>
        {text && <p>{text}</p>}
        {!text && <em>No comments</em>}
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    text: PropTypes.string
  }).isRequired
};

export default ReviewsList;
