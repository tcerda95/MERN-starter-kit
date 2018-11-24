const ctrl = require('../../controllers/reviews');
const Review = require('../../model/reviews');
const sinon = require('sinon');

describe('Reviews Controller', () => {
  const { assert } = sinon;
  let req;
  let res;

  const assertOnceWith = (stub, value) => {
    assert.calledOnce(stub);
    assert.calledWith(stub, value);
  };

  beforeEach(() => {
    req = { params: {} };
    res = {
      status: sinon.spy(),
      json: sinon.spy()
    };
  });

  describe('.listReviews', () => {
    beforeEach(() => {
      sinon.stub(Review, 'find');
    });

    afterEach(() => {
      Review.find.restore();
    });

    it('should return status 200 with the reviews list as json on success', async () => {
      const expectedReviews = ['a review', 'another review'];
      Review.find.resolves(expectedReviews);

      try {
        await ctrl.listReviews(req, res);
      }
      finally {
        assertOnceWith(res.status, 200);
        assertOnceWith(res.json, expectedReviews);
      }
    });

    it('should return status 500 with the error as json on error', async () => {
      const expectedError = {
        message: 'fatal error'
      };
      
      Review.find.rejects(expectedError);

      try {
        await ctrl.listReviews(req, res);
      }
      finally {
        assertOnceWith(res.status, 500);
        assertOnceWith(res.json, expectedError);
      }
    });
  });
});
