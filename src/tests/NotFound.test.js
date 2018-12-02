import React from 'react';
import NotFound from '../views/notFound';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing',()=> {
    mount(<Router><NotFound /></Router>);
})
