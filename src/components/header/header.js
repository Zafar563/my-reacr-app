import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return (
  
      <div className="header-start">
        <div className="container">
            <div className='header'>
              <div className="header-logo">SOLVE.</div>
              <div className="nav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/achviments">Achviments</Link> </li>
                  <li><Link to="/about">About Us</Link></li>
                </ul>
              </div>
                <div className="btns">
                  <button className='btn'>Sing Up</button>
                  <button className='btn'>Log In</button>
                </div>
           </div>
      </div>
      </div>
  
  )
}

export default Header ; 
