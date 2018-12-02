import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../views/home';

it('renders without crashing',()=> {
    mount(<Router><HomePage /></Router>);
})
