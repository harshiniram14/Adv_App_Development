import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import "../assets/Editbooking.css";
import Editbanner from './Editbanner';

const Editbooking = () => {
  const [formData, setFormData] = useState({
    custname: '',
    booktype: '',
    headcount: 0,
    bookdate: '',
    booktime: '',
    location: ''
  });
  const [token, setToken] = useState('');

  // Fetch the token from local storage when component mounts
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  // Function to handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform PUT request to update the booking with the token in the headers
      await axios.put(
        `http://localhost:8080/api/v1/user/updateBookings/${formData.custname}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ); 
      console.log('Booking updated successfully');
      // Clear form data
      setFormData({
        custname: '',
        booktype: '',
        headcount: 0,
        bookdate: '',
        booktime: '',
        location: ''
      });
      // Navigate back to Editbooking page
      history.push('/editbooking');
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  return (
    <div className="edit-booking-container">
      <Navbar />
      <Editbanner />
      <div>
        <h2 className='heading-editbook'>Edit Booking</h2>
        <form className='edit-booking-form' onSubmit={handleSubmit}>
          <label className='edit-booking-label'>
            Customer Name:
            <input className='edit-booking-input' type="text" name="custname" value={formData.custname} onChange={handleChange} />
          </label>
          <label className='edit-booking-label'>
            Booking Type:
            <input className='edit-booking-input' type="text" name="booktype" value={formData.booktype} onChange={handleChange} />
          </label>
          <label className='edit-booking-label'>
            Headcount:
            <input className='edit-booking-input' type="number" name="headcount" value={formData.headcount} onChange={handleChange} />
          </label>
          <label className='edit-booking-label'>
            Booking Date:
            <input className='edit-booking-input' type="date" name="bookdate" value={formData.bookdate} onChange={handleChange} />
          </label>
          <label className='edit-booking-label'>
            Booking Time:
            <input className='edit-booking-input' type="time" name="booktime" value={formData.booktime} onChange={handleChange} />
          </label>
          <label className='edit-booking-label'>
            Location:
            <input className='edit-booking-input' type="text" name="location" value={formData.location} onChange={handleChange} />
          </label>
          <button className='edit-booking-button' type="submit">Update Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Editbooking;
