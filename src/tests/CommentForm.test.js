import React from 'react';
import CommentForm from '../components/CommentForm';
import { shallow } from 'enzyme';

describe('React CommentForm testing', () => {
  let onCommentSubmitMock;
  let onLogoutMock;
  let wrapper;

  beforeEach(() => {
    onCommentSubmitMock = jest.fn();
    onLogoutMock = jest.fn();
    wrapper = shallow(<CommentForm onCommentSubmit={onCommentSubmitMock} onLogout={onLogoutMock} />);
  });

  it('should have value "a" on keypress "a"', () => {
    let input = wrapper.find('textarea');
    input.simulate('change', {target: {value: 'testing...'}});

    input = wrapper.find('textarea');
    expect(input.get(0).props.value).toEqual('testing...');
  });

  it('should start with no input', () => {
    let input = wrapper.find('textarea');
    expect(input.get(0).props.value).toEqual('');    
  });

  it('should submit on keypress Enter if there is content', () => {
    let input = wrapper.find('textarea');
    input.simulate('change', {target: {value: 'testing...'}});
    input.simulate('keypress', {key: 'Enter', preventDefault: () => {}});

    const calls = onCommentSubmitMock.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({text: 'testing...'});
  });

  it('should not submit on keypress Enter if there is no content', () => {
    let input = wrapper.find('textarea');
    input.simulate('keypress', {key: 'Enter', preventDefault: () => {}});

    const calls = onCommentSubmitMock.mock.calls;
    expect(calls.length).toBe(0);    
  });
});