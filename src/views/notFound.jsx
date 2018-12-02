import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ()=> {
  return (
    <div className="not-found welcome-text">
        <h4>404. Resource not found</h4>
        <Link to="/">Go Back to My Diary</Link>

    </div>
  )
}

export default NotFound;
