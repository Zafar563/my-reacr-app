import React from 'react';

const Header = () => {
  return (
  
      <div className="header-start">
        <div className="container">
            <div className='header'>
              <div className="header-logo">SOLVE</div>
              <div className="nav">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Achievement</a>  </li>
                  <li><a href="#">About Us</a></li>
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

export default Header
