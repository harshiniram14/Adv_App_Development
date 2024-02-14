import { useState } from 'react';
import axios from 'axios';
import '../assets/Adminadd.css';
import Adminnavbar from './Adminnavbar';

const Adminadd = () => {
  const [formData, setFormData] = useState({
    eventname: '',
    eventdesc: '',
    eventimg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem('token');

      // Set headers with the token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      // Make a POST request to your backend endpoint to add data to the events table
      const response = await axios.post('http://localhost:8080/api/v1/auth/postEvents', formData, config);
      
      // Handle successful response
      console.log('Event added successfully:', response.data);
      
      // Clear the form after successful submission
      setFormData({
        eventname: '',
        eventdesc: '',
        eventimg: ''
      });
      
      // Redirect or show a success message
    } catch (error) {
      // Handle error
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <Adminnavbar /><br />
      <br />
      <div className="admin-navbar-container">
        <h2>Add Event</h2>
        <form className='admin-add-form' onSubmit={handleSubmit}>
          <div className="admin-add-group">
            <label className='admin-add-label' htmlFor="eventName">Event Name:</label>
            <input className='admin-add-input'
              type="text"
              id="eventname"
              name="eventname"
              value={formData.eventname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin-add-group">
            <label className='admin-add-label' htmlFor="eventDescription">Event Description:</label>
            <textarea
              id="eventdesc"
              name="eventdesc"
              value={formData.eventdesc}
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin-add-group">
            <label className='admin-add-label' htmlFor="imageUrl">Image URL:</label>
            <input className='admin-add-input'
              type="text"
              id="eventimg"
              name="eventimg"
              value={formData.eventimg}
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
