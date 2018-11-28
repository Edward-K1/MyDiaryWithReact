import React from 'react';
import { Link } from 'react-router-dom';

const LandingBody = () =>{
  return (
    <div className="container get-started">
      <div id="get-started">
        <span className="welcome-text">
            Do your thoughts like to wander?
            <br/>
            Ours do too. And that is what this place is for.
            <br/>
        </span>
        <Link to="/signup"><button className="btn btn-primary" id="get-started">Get Started </button></Link>
    </div>
    </div>
  )
}

export default LandingBody;
