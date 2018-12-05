import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
global.fetch = require('jest-fetch-mock');
global.toast = jest.fn();
global.showErrorMsg = jest.fn();
global.toggleLoader = jest.fn();
global.removeEntryContainer = jest.fn()
global.logOut = jest.fn()
global.handleDelete = jest.fn()
