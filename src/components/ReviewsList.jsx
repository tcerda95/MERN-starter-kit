import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { ListGroup, ListGroupItem, Badge, Button } from 'reactstrap';
import '../styles/ReviewsList.scss';

const ReviewsList = ({ reviews, onDelete, t }) => (
  <ListGroup>
    {reviews.map((r, i) => <ReviewItem t={t} key={r.id} review={r} onDelete={onDelete} />)}
  </ListGroup>
);

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

const ReviewItem = ({ review, onDelete, t }) => {
  const { score, fullName, text, recommend } = review;
  const badgeText = recommend ? t('recommends') : t('notRecommends');
  const badgeColor = recommend ? 'success' : 'warning';

  return (
    <ListGroupItem className="review-item">
      <h2>{score}</h2>
      <div>
        <h4>{fullName}</h4>
        <Badge color={badgeColor} className="recommend-badge">{badgeText}</Badge>
        <p>{text ? text : t('noComments')}</p>
      </div>
      <Button color="danger" outline onClick={() => onDelete(review)}>{t('delete')}</Button>
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

export default translate()(ReviewsList);
