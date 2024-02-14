import React, { useState } from "react";
import "../assets/Footer.css"

const Footer = () => {
  // State to control the visibility of the image
  const [showImage, setShowImage] = useState(false);

  // Function to toggle the visibility of the image
  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet" />
      <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-paragraph">
              <a href="/About" className="footer-link">
                About
              </a>
              <a href="/Events" className="footer-link">
                All Events
              </a>
              <a href="/Addbooking" className="footer-link">
                New Booking
              </a>
              <a href="/Logout" className="footer-link">
                Logout
              </a>
              <a href="/Terms" className="footer-link" onClick={toggleImage}>
                Terms and Conditions
              </a>
            </p>
          </div>
          <div className="footer-bottom">
            <p className="footer-paragraph">&copy; 2024 EventPlanner. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {showImage && (
        <div className="terms-image">
          <img src="/path/to/your/image.png" alt="Terms and Conditions" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Footer;
