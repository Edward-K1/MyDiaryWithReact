import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="row nav-div p-1">
    <span className="col-10 head-text"><Link to="/">My Diary</Link></span>
    <span className="col-2">
    <Link to="/signup"><button type="button" className="btn btn-primary m-1">Signup</button></Link>
    <Link to="/login"><button type="button" className="btn btn-primary m-1">Login</button></Link>

    </span>

   
    </div>
  )
}
export default Header;
