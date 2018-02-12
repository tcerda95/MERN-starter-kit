const Comment = require('../../model/comments');
const validation = require('../utils/validation');

describe('Comment', () => {
  it('should be invalid if author is missing', done => {
    const comment = new Comment();

    comment.validate(err => {
      validation.require('author', err);
      done();
    });
  });

  it('should be invalid if text is missing', done => {
    const comment = new Comment();

    comment.validate(err => {
      validation.require('text', err);
      done();
    });
  });

  it('should be valid if text and author are provided', done => {
    const comment = new Comment({
      text: 'a text',
      author: 'an author'
    });

    comment.validate(err => {
      validation.valid(err);
      done();
    });
  });
});
