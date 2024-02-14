import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import "../assets/Events.css";
import Footer from './Footer';
import Eventbanner from './Eventbanner';

const Events = () => {
  // State to store events
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch events from the backend when component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/auth/getEvents')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter events based on search query
  const filteredEvents = events.filter(event =>
    event.eventname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Eventbanner/>
      <div className="message-container">
        <p>Feel free to choose from the below listed events and book them soon.</p>
      </div><br />
      <div className="search-container">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by event name"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-input"
        />
      </div>
      {/* Render events */}
      <div className="packages-container">
        {filteredEvents.map(event => (
          <div key={event.eventid} className="package-card">
            <img src={event.eventimg} alt={event.eventname} className="package-image" />
            <div className="package-details">
              <h2>{event.eventname}</h2>
              <p>{event.eventdesc}</p>
              {/* Add Link for "Book Now" button */}
              <Link to="/Addbooking" className="book-now-button">Book Now</Link>
            </div>
          </div>
        ))}
      </div><br />
      <Footer/>
    </div>
  );
};

export default Events;