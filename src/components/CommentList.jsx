import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

import 'bulma/css/bulma.css';

const CommentList = ({ data, onCommentDelete }) => {
  const commentNodes = data.map(comment => (
    <Comment
      author={comment.author}
      uniqueID={comment._id}
      key={comment._id}
      imageURL={comment.imageURL}
      twitter={comment.twitter}
      onCommentDelete={onCommentDelete}
    >
      {comment.text}
    </Comment>
  ));

  return (
    <div>
      {commentNodes}
    </div>
  );
};

CommentList.propTypes = {
  data: PropTypes.array.isRequired,
  onCommentDelete: PropTypes.func.isRequired
};

export default CommentList;
