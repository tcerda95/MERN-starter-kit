import sinon from 'sinon';

const util = {
  spyConsoleError() {
    sinon.stub(console, 'error');
  },

  restoreConsoleError() {
    console.error.restore();
  },

  expectMissingProp(prop, component) {
    sinon.assert.calledWithMatch(console.error, new RegExp(`The prop \`${prop}\` is marked as required in \`${component}\``));
  }
};

export default util;
