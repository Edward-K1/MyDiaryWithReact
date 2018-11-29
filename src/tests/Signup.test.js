import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from '../components/signup/signup';


it('renders without crashing',()=> {
    const wrapper = mount(<Router><Signup /></Router>);
    expect(wrapper.find('#signup-btn').simulate('submit'));
    expect(wrapper.find('#firstname').simulate('change'));
})
