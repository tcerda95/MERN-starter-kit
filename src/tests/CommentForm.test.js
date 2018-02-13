import React from 'react';
import sinon from 'sinon';
import CommentForm from '../components/CommentForm';
import propTypesUtils from './utils/propTypes-utils.js';
import { shallow } from 'enzyme';

describe('React CommentForm testing', () => {
  const { assert } = sinon;
  let onCommentSubmitSpy;
  let onLogoutSpy;
  let preventDefaultSpy;
  let wrapper;

  beforeEach(() => {
    onCommentSubmitSpy = sinon.stub();
    onLogoutSpy = sinon.spy();
    preventDefaultSpy = sinon.spy();
    wrapper = shallow(<CommentForm t={t} onCommentSubmit={onCommentSubmitSpy} onLogout={onLogoutSpy} />);
  });

  it('should raise an error if any required props is missing', () => {
    propTypesUtils.spyConsoleError();

    shallow(<CommentForm t={t} />);
    propTypesUtils.expectMissingProp('onCommentSubmit', 'CommentForm');
    propTypesUtils.expectMissingProp('onLogout', 'CommentForm');

    propTypesUtils.restoreConsoleError();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have value "a" on keypress "a"', () => {
    let input = wrapper.find('textarea');
    input.simulate('change', { target: { value: 'testing...' } });

    input = wrapper.find('textarea');
    expect(input.get(0).props).toHaveProperty('value', 'testing...');
  });

  it('should start with no input', () => {
    const input = wrapper.find('textarea');
    expect(input.get(0).props).toHaveProperty('value', '');    
  });

  it('should submit on keypress Enter if there is content', () => {
    const input = wrapper.find('textarea');
    input.simulate('change', { target: { value: 'testing...' } });
    input.simulate('keypress', { key: 'Enter', preventDefault: preventDefaultSpy });

    assert.calledOnce(onCommentSubmitSpy);
    assert.calledWith(onCommentSubmitSpy, { text: 'testing...' });
    assert.calledOnce(preventDefaultSpy);
  });

  it('should not submit on keypress Enter if there is no content', () => {
    const input = wrapper.find('textarea');
    input.simulate('keypress', { key: 'Enter', preventDefault: preventDefaultSpy });

    assert.notCalled(onCommentSubmitSpy);
    assert.calledOnce(preventDefaultSpy);
  });
});
