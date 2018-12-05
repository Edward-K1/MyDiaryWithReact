import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/navigation/NavBar';


it('renders without crashing',()=> {
    const wrapper = mount(<Router><NavBar /></Router>);
    expect(wrapper.find('#logout-btn').simulate('click'));
    
})
