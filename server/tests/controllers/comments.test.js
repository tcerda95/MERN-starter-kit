const ctrl = require('../../controllers/comments');
const Comment = require('../../model/comments');
const sinon = require('sinon');

describe('Comments Controller', () => {
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

  describe('.listComments', () => {
    beforeEach(() => {
      sinon.stub(Comment, 'find');
    });

    afterEach(() => {
      Comment.find.restore();
    });

    it('should return status 200 with the comment list as json on success', async () => {
      const expectedComments = ['a comment', 'another comment'];
      Comment.find.resolves(expectedComments);

      try {
        await ctrl.listComments(req, res);
      }
      finally {
        assertOnceWith(res.status, 200);
        assertOnceWith(res.json, expectedComments);
      }
    });

    it('should return status 500 with the error as json on error', async () => {
      const expectedError = {
        message: 'fatal error'
      };
      
      Comment.find.rejects(expectedError);

      try {
        await ctrl.listComments(req, res);
      }
      finally {
        assertOnceWith(res.status, 500);
        assertOnceWith(res.json, expectedError);
      }
    });
  });
});
