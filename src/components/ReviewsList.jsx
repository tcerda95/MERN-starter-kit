import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Badge, Button } from 'reactstrap';
import '../styles/ReviewsList.scss';

const ReviewsList = ({ reviews, onDelete }) => (
  <ListGroup>
    {reviews.map((r, i) => <ReviewItem key={r.id} review={r} onDelete={onDelete} />)}
  </ListGroup>
);

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

const ReviewItem = ({ review, onDelete }) => {
  const { score, fullName, text, recommend } = review;
  const badgeText = recommend ? 'Recommends' : 'Does not recommend';
  const badgeColor = recommend ? 'success' : 'warning';

  return (
    <ListGroupItem className="review-item">
      <h2>{score}</h2>
      <div>
        <h4>{fullName}</h4>
        <Badge color={badgeColor} className="recommend-badge">{badgeText}</Badge>
        <p>{text ? text : 'No comments'}</p>
      </div>
      <Button color="danger" outline onClick={() => onDelete(review)}>Delete</Button>
    </ListGroupItem>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    text: PropTypes.string,
    recommend: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ReviewsList;
