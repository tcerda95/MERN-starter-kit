import React from 'react';
import sinon from 'sinon';
import axios from 'axios';
import ReviewsContainer from '../components/ReviewsContainer';
import { shallow } from 'enzyme';

describe('Reviews Container', () => {
  it('should update "state.reviews" on mount', async () => {
    const url = '/api/reviews';
    const reviews = ['a review', 'another review'];

    // Must setup stub before shallow rendering since request is done on compoentDidMount
    sinon.stub(axios, 'get').resolves({ data: reviews });

    const wrapper = shallow(<ReviewsContainer />);

    await wrapper.instance().componentDidMount();

    expect(wrapper.state('reviews')).toEqual(reviews);
    sinon.assert.called(axios.get);
    sinon.assert.calledWith(axios.get, url);

    axios.get.restore();
  });
});
