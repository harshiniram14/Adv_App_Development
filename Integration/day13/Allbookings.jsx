import { useState, useEffect } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
import "../assets/Allbookings.css";

const Allbookings = () => {
  const [bookings, setBookings] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      fetchBookings();
    }
  }, [token]);

  const fetchToken = () => {
    // Fetch the token from local storage
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user/getBookings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Response:', response.data); // Log response data
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };
  
  const handleDeleteBooking = async (custname) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/user/deleteBookings/${custname}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Refresh bookings after deletion
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div>
      <Adminnavbar />
      <div className="booking-list">
        <h2>All Bookings</h2>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Customer Name</th>
              <th>Booking Type</th>
              <th>Head Count</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.bookid}>
                <td>{booking.bookid}</td>
                <td>{booking.custname}</td>
                <td>{booking.booktype}</td>
                <td>{booking.headcount}</td>
                <td>{booking.bookdate}</td>
                <td>{booking.booktime}</td>
                <td>{booking.location}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteBooking(booking.custname)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbookings;
