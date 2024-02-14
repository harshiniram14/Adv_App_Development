import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Bookingbanner from './Bookingbanner';
import "../assets/Addbooking.css";

const Addbooking = () => {
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
      // Perform POST request to create a new booking with the token in the headers
      await axios.post("http://localhost:8080/api/v1/user/postBookings", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Clear the form data after successful submission
      setFormData({
        custname: '',
        booktype: '',
        headcount: 0,
        bookdate: '',
        booktime: '',
        location: ''
      });
      console.log('Booking created successfully');
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Bookingbanner />
      <div>
        <h2 className='heading-addbook'>Add Booking</h2>
        <br />
        <form className='form-addbook' onSubmit={handleSubmit}>
          <label className='label-addbook'>
            Customer Name:
            <input className='ip-addbook' type="text" name="custname" value={formData.custname} onChange={handleChange} />
          </label>
          <label className='label-addbook'>
            Booking Type:
            <input className='ip-addbook' type="text" name="booktype" value={formData.booktype} onChange={handleChange} />
          </label>
          <label className='label-addbook'>
            Headcount:
            <input className='ip-addbook' type="number" name="headcount" value={formData.headcount} onChange={handleChange} />
          </label>
          <label className='label-addbook'>
            Booking Date:
            <input className='ip-addbook' type="date" name="bookdate" value={formData.bookdate} onChange={handleChange} />
          </label>
          <label className='label-addbook'>
            Booking Time:
            <input className='ip-addbook' type="time" name="booktime" value={formData.booktime} onChange={handleChange} />
          </label>
          <label className='label-addbook'>
            Location:
            <input className='ip-addbook' type="text" name="location" value={formData.location} onChange={handleChange} />
          </label>
          <button className='btn-addbook' type="submit">Add Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Addbooking;
