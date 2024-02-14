import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Importing Navbar component
import Bookingbanner from "./Bookingbanner";
import "../assets/Booking.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  //const bookingContainerEditRef = useRef(null);

  // Function to fetch bookings
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/user/getBookings", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [token]);

  // Function to handle form submission for creating a new booking
  const handleCreateBooking = async (formData) => {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/postBookings", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Booking created successfully:", response.data);
      fetchBookings();
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  // // Function to handle editing a booking
  // const handleEditBooking = async (custname, updatedData) => {
  //   try {
  //     const response = await axios.put(`http://localhost:8080/api/v1/user/updateBookings/${custname}`, updatedData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     console.log("Booking updated successfully:", response.data);
  //     fetchBookings();
  //   } catch (error) {
  //     console.error("Error updating booking:", error);
  //   }
  // };

  // Function to handle deleting a booking
  const handleDeleteBooking = async (custname) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/user/deleteBookings/${custname}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Booking deleted successfully:", response.data);
      fetchBookings();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Bookingbanner /> {/* Include the VideoPlayer component */}
      {/* <h1>Bookings</h1>
      <button onClick={() => setToken('')}>Logout</button> Add logout button to clear token */}

      {/* Form for creating a new booking */}
      <div className="booking-container">
        <p>Fill the form to book an event</p>
      </div>
      <div className="booking-form">
        <h2>Book an event</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const bookingData = {
            custname: formData.get('custname'),
            booktype: formData.get('booktype'),
            headcount: parseInt(formData.get('headcount')),
            bookdate: formData.get('bookdate'),
            booktime: formData.get('booktime'),
            location: formData.get('location'),
          };
          handleCreateBooking(bookingData);
        }}>
          <label className="label-wed">Name:</label>
          <input className="input-wed" type="text" name="custname" placeholder="Customer Name" required />
          <label className="label-wed">Event type:</label>
          <input className="input-wed" type="text" name="booktype" placeholder="Booking Type" required />
          <label className="label-wed">Date of Event:</label>
          <input className="input-wed" type="date" name="bookdate" required />
          <label className="label-wed">Time of Event:</label>
          <input className="input-wed" type="time" name="booktime" required />
          <label className="label-wed">Head count:</label>
          <input className="input-wed" type="number" name="headcount" placeholder="Head Count" required />
          <label className="label-wed">Location:</label>
          <input className="input-wed" type="text" name="location" placeholder="Location" required />
          <button className="button-wed" type="submit">Submit</button>
        </form>
      </div>

      {/* Table to display bookings */}
      <div className="booking-container">
        <p>Your Bookings</p>
      </div>
      <div className="booking-table">
        <table className="table-wed">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Booking Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Head Count</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.custname}>
                <td>{booking.custname}</td>
                <td>{booking.booktype}</td>
                <td>{booking.bookdate}</td>
                <td>{booking.booktime}</td>
                <td>{booking.headcount}</td>
                <td>{booking.location}</td>
                <td>
                  {/* <button className="edit-button" onClick={() => {
                    const updatedData = {
                      custname: booking.custname,
                      booktype: booking.booktype, //'Updated Booking Type', // Example updated data
                      headcount: booking.headcount, //10, // Example updated data
                      bookdate:  booking.bookdate,//'2024-12-31', // Example updated data
                      booktime: booking.booktime, //'18:00', // Example updated data
                      location: booking.location //'Updated Location', // Example updated data
                    };
                    handleEditBooking(booking.custname, updatedData);
                  }}>Edit</button> */}
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

export default Booking;
