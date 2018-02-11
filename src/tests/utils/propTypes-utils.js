import sinon from 'sinon';

export function spyConsoleError() {
  sinon.stub(console, 'error');
};

export function restoreConsoleError() {
  console.error.restore();
}

export function expectMissingProp(prop, component) {
  sinon.assert.calledWithMatch(console.error,
    new RegExp(`The prop \`${prop}\` is marked as required in \`${component}\``));
};

