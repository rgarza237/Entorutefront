import React from 'react'
import { Link } from 'react-router-dom'



function NavBar() {
  return (
    <div className="nav-container">
      <ul>

        <li>
          <a href='/' className="btn-nav">1</a>
        </li>
        
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        
        <li>
          <Link to="/">5 GIDA</Link>
        </li>
        <li>
          <a href='/' className="btn-nav">3</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;