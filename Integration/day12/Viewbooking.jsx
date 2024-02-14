import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import "../assets/Viewbooking.css"
import Mybookingbanner from './Mybookingbanner';

const Viewbooking = () => {
  const [bookings, setBookings] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch the token from local storage
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    const fetchBookings = async () => {
      try {
        // Make a GET request to fetch bookings with the token in the headers
        const response = await axios.get("http://localhost:8080/api/v1/user/getBookings", {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        });
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleDeleteBooking = async (custname) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/user/deleteBookings/${custname}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Refresh bookings after deletion
      const response = await axios.get("http://localhost:8080/api/v1/user/getBookings", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookings(response.data);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <div className="view-booking-container"> {/* Updated classname */}
      <Navbar />
      <Mybookingbanner />
      <div className="booking-list"> {/* Updated classname */}
        <h2>All Bookings</h2>
        <table className="booking-table"> {/* Updated classname */}
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Booking Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Head Count</th>
              <th>Location</th>
              <th>Action</th> {/* New column for action */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.custname}</td>
                <td>{booking.booktype}</td>
                <td>{booking.bookdate}</td>
                <td>{booking.booktime}</td>
                <td>{booking.headcount}</td>
                <td>{booking.location}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteBooking(booking.custname)}>Delete</button> {/* Updated classname */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewbooking;
