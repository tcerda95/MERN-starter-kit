import React from 'react';
import sinon from 'sinon';
import axios from 'axios';
import CommentBox from '../components/CommentBox';
import { shallow } from 'enzyme';

describe('Comment Box', () => {
  it('should update "state.data" on mount', async () => {
    const url = 'path/to/request';
    const comments = ['a comment', 'another comment'];

    // Must setup stub before shallow rendering since request is done on compoentDidMount
    sinon.stub(axios, 'get');
    axios.get.returns(Promise.resolve({ data: comments }));

    const wrapper = shallow(<CommentBox url={url} pollInterval={10000} />);

    await wrapper.instance().componentDidMount();

    expect(wrapper.state('data')).toEqual(comments);
    sinon.assert.called(axios.get);
    sinon.assert.calledWith(axios.get, url);

    axios.get.restore();
  });
});