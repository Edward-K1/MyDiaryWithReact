import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../common/functions';

const  NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-primary">
    <Link to ="/entry/create"><button className="btn btn-primary">Write New Entry</button></Link>
    <button className="btn btn-primary" onClick={()=> logOut()}>Logout</button>
      
    </div>
  )
}
export default NavBar;
