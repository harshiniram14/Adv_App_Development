import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../assets/Navbar.css"; // Import your navbar styling if needed

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(currentScrollPos > 20); // Change 20 to your desired scroll threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <React.Fragment>
      {/* Google Fonts link */}
      <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet" />
      
      {/* Navbar */}
      <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/Events">All Events</Link></li>
          <li className="nav-item"><Link to="/Booking">Bookings</Link></li>
          <li className="nav-item"><Link to="/Logo">Logout</Link></li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
