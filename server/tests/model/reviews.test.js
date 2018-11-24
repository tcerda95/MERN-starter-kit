const Review = require('../../model/reviews');
const validation = require('../utils/validation');

describe('Review', () => {
  it('should be invalid if firstName is missing', done => {
    const comment = new Review();

    comment.validate(err => {
      validation.require('firstName', err);
      done();
    });
  });
});
