import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../components/login/login';

it('renders without crashing',()=> {
    const wrapper = mount(<Router><Login /></Router>);
    expect(wrapper.find('#login-btn').simulate('submit'));
    expect(wrapper.find('#email').simulate('change'));
})
