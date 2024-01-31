import { useState } from 'react';
import Navbar from './Navbar';
import "../assets/Events.css";
import Footer from './Footer';
import Eventbanner from './Eventbanner';

const Events = () => {
  // Sample event data (replace with actual data)
  const [events] = useState([
    { id: 1, eventType: 'Wedding', headCount: 100, imageUrl: 'https://i.postimg.cc/Hs4Gz9ZW/wedding.jpg' },
    { id: 2, eventType: 'Birthday Party', headCount: 50, imageUrl: 'https://i.postimg.cc/T35jCbLw/brooke-lark-p-GM4sjt-Bd-Q-unsplash.jpg' },
    { id: 3, eventType: 'Corporate Event', headCount: 200, imageUrl: 'https://i.postimg.cc/43tsXXyP/antenna-ZDN-G1x-BWHY-unsplash.jpg' },
    { id: 4, eventType: 'Conference', headCount: 150, imageUrl: 'https://i.postimg.cc/bJwPkkLC/edwin-andrade-4-V1d-C-eo-Cwg-unsplash.jpg' }, // New package
    // Add more event objects as needed
  ]);

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter events based on search query
  const filteredEvents = events.filter(event =>
    event.eventType.toLowerCase().includes(searchQuery.toLowerCase())
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
          placeholder="Search by event type"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-input"
        />
      </div>
      {/* Render packages */}
      <div className="packages-container">
        {filteredEvents.map(event => (
          <div key={event.id} className="package-card">
            <img src={event.imageUrl} alt={event.eventType} className="package-image" />
            <div className="package-details">
              <h2>{event.eventType}</h2>
              <p>Includes: Games, Entertainment, Cake</p>
            </div>
          </div>
        ))}
      </div><br />
      <Footer/>
    </div>
  );
};

export default Events;
