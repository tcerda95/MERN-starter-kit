import './tempPolyfills';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mongoose from 'mongoose';
import sinon from 'sinon';
 
configure({ adapter: new Adapter() });

// Fail when something is logged to error
console.error = msg => {
  throw new Error(msg);
};

mongoose.Promise = Promise;

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
