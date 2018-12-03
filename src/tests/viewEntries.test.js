import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewEntries from '../components/diary/viewEntries';
import SingleEntry from '../components/diary/singleEntry';


const testEntries = [
    { eid:'1', title:'title 1', content:'my content',created:'28-Aug-2018 13:44'},
    { eid:'2', title:'title 2', content:'my content 2',created:'20-Aug-2018 13:44'}
];
it('renders without crashing',()=> {
    const wrapper = shallow(<Router><ViewEntries /></Router>);
    wrapper.setState({entries: testEntries})
    
})

it('tests single entry component', ()=>{
   const wrapper = mount(<Router>
        <SingleEntry
        title='title 1'
        body='body'
        createdAt='28-June-2018'
        getEntry={jest.fn}
        deleteEntry={jest.fn}
        id='1'
          />
        </Router>);
        expect(wrapper.find('#delete-1').simulate('click'));
        
})