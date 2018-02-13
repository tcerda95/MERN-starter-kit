import './tempPolyfills';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
 
configure({ adapter: new Adapter() });

// Fail when something is logged to error
console.error = msg => {
  throw new Error(msg);
};

global.localStorage = {
  setItem: sinon.spy(),
  getItem: sinon.spy(),
  clear: sinon.spy()
};

global.sessionStorage = {
  setItem: sinon.spy(),
  getItem: sinon.spy(),
  clear: sinon.spy()  
};

global.t = key => key;

jest.mock('react-i18next', () => {
  return {
    translate: () => Component => Component
  };
});

jest.mock('react-router-dom', () => ({
  NavLink: props => <a href={props.to}>{props.children}</a>
}));
