import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h2>SOLVE.</h2>
          <p>Work together seamlessly with real-time updates and communication.</p>
          <p className="policy">Team Conditional & Policy</p>
        </div>

        <div className="footer-section">
          <h4>Pages</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Achievement</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Customer</li>
            <li>Enterprise</li>
            <li>Partners</li>
            <li>Job</li>
          </ul>
        </div>
        <div className="footer-section">
             <div className="btns">
                  <button className='btn'>Sing Up</button>
                  <button className='btn'>Log In</button>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>©SOLVE</p>
      </div>
    </footer>
  );
}

export default Footer;
