import React from 'react';
import sinon from 'sinon';
import CommentForm from '../components/CommentForm';
import { spyConsoleError, expectMissingProp, restoreConsoleError } from './utils/propTypes-utils.js';
import { shallow } from 'enzyme';

describe('React CommentForm testing', () => {
  const assert = sinon.assert;
  let onCommentSubmitSpy;
  let onLogoutSpy;
  let preventDefaultSpy;
  let wrapper;

  beforeEach(() => {
    onCommentSubmitSpy = sinon.stub();
    onLogoutSpy = sinon.spy();
    preventDefaultSpy = sinon.spy();
    wrapper = shallow(<CommentForm onCommentSubmit={onCommentSubmitSpy} onLogout={onLogoutSpy} />);
  });

  it('should raise an error if any required props is missing', () => {
    spyConsoleError();

    const wrapper = shallow(<CommentForm />);
    expectMissingProp('onCommentSubmit', 'CommentForm');
    expectMissingProp('onLogout', 'CommentForm');

    restoreConsoleError();
  });

  it('should have value "a" on keypress "a"', () => {
    let input = wrapper.find('textarea');
    input.simulate('change', {target: {value: 'testing...'}});

    input = wrapper.find('textarea');
    expect(input.get(0).props).toHaveProperty('value', 'testing...');
  });

  it('should start with no input', () => {
    let input = wrapper.find('textarea');
    expect(input.get(0).props).toHaveProperty('value', '');    
  });

  it('should submit on keypress Enter if there is content', () => {
    let input = wrapper.find('textarea');
    input.simulate('change', { target: { value: 'testing...' } });
    input.simulate('keypress', { key: 'Enter', preventDefault: preventDefaultSpy });

    assert.calledOnce(onCommentSubmitSpy);
    assert.calledWith(onCommentSubmitSpy, { text: 'testing...' });
    assert.calledOnce(preventDefaultSpy);
  });

  it('should not submit on keypress Enter if there is no content', () => {
    let input = wrapper.find('textarea');
    input.simulate('keypress', { key: 'Enter', preventDefault: preventDefaultSpy });

    assert.notCalled(onCommentSubmitSpy);
    assert.calledOnce(preventDefaultSpy);
  });
});