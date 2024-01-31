// Add.jsx

import { useState } from 'react';
import '../assets/Adminadd.css';
import Adminnavbar from './Adminnavbar';

const Adminadd = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventLocation:'',
    eventDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to backend
    console.log(formData);
  };

  return (
    <div>
    <Adminnavbar/><br />
    <br />
      <div className="admin-navbar-container">
      <h2>Add Event</h2>
      <form className='admin-add-form' onSubmit={handleSubmit}>
        <div className="admin-add-group">
          <label className='admin-add-label' htmlFor="eventName">Event Name:</label>
          <input className='admin-add-input'
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            />
        </div>
        <div className="admin-add-group">
          <label className='admin-add-label' htmlFor="eventDate">Event Date:</label>
          <input className='admin-add-input'
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            />
        </div>
        <div className="admin-add-group">
          <label className='admin-add-label' htmlFor="eventName">Location:</label>
          <input className='admin-add-input'
            type="text"
            id="eventLocation"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            required
            />
        </div>
        <div className="admin-add-group">
          <label className='admin-add-label' htmlFor="eventDescription">Event Description:</label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            required
            />
        </div>
        <button className='admin-add-button' type="submit">Add Event</button>
      </form>
    </div>
    </div>
  );
};

export default Adminadd;
