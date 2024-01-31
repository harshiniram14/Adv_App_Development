import "../assets/Footer.css"; // Import your footer styling if needed
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet" />
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-para">
            <a href="/About" className="footer-link">
              About
            </a>
            <a href="/Events" className="footer-link">
              All Events
            </a>
            <a href="/Booking" className="footer-link">
              Booking
            </a>
            <a href="/Logout" className="footer-link">
              Logout
            </a>
            <a href="/Terms" className="footer-link">
              Terms and Conditions
            </a>
          </p>
        </div>
        <div className="footer-bottom">
          <p className="footer-para">&copy; 2024 EventPlanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </React.Fragment>
  );
};

export default Footer;
