import React from 'react';
import Hero from '../components/Hero';
import { shallow } from 'enzyme';

describe('React Hero testing', () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<Hero />); });

  it('renders two <div>', () => {
    expect(wrapper.find('div')).toHaveLength(2);
  });

  it('renders one .title', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });
});