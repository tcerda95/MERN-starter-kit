import './tempPolyfills';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Fail when something is logged to error
console.error = msg => {
  throw new Error(msg);
};