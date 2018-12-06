import React from 'react'
import '../../styles/landing.css';
import Header from './header';
import LandingBody from './landingBody';

const ContentBox = () => {
  return (
    <div className='landing-body'>
        <Header />
        <LandingBody />
    </div>
  )
}
export default ContentBox;
