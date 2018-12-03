import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateEntry from '../components/diary/createEntry';


it('renders without crashing',()=> {
    const wrapper = mount(<Router><CreateEntry /></Router>);
    expect(wrapper.find('#entry-text-submit').simulate('submit'));
    expect(wrapper.find('#content-title-text').simulate('change'));
    
})
