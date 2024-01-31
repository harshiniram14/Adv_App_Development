import  { useRef } from 'react';
import Navbar from "./Navbar";
import "../assets/Booking.css";
import Footer from "./Footer";
import Bookingbanner from "./Bookingbanner";

const Booking = () => {
  const bookingContainerEditRef = useRef(null);

  return (
    <div>
      <Navbar />
      <Bookingbanner/> 
      <br />
      <div className="booking-container">
        <p>Fill the form to book an event</p>
      </div>
      <br />
      <div className="booking-form">
        <h2 className="header-wed">Book an event</h2>
        <form className="form-wed">
          {/* Add form fields for booking */}
          <label className="label-wed">Name:</label>
          <input className="input-wed" type="text" name="name" />
          
          <label className="label-wed">Event type:</label>
          <input className="input-wed" type="text" name="event" />

          <label className="label-wed">Date of Event:</label>
          <input className="input-wed" type="date" name="eventDate" />

          <label className="label-wed">Head count:</label>
          <input className="input-wed" type="number" name="theme" />

          <label className="label-wed">Description:</label>
          <input className="input-wed" type="textbox" name="description" />
          {/* Add more form fields as needed */}

          <button className="button-wed" type="submit">Submit</button>
        </form>
        <br />
      </div>

      <div className="booking-container">
        <p>Your Bookings</p>
      </div>
      <br />

      <div className="booking-table">
        <table className="table-wed">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Event Type</th>
              <th>Date</th>
              <th>Head Count</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows dynamically based on bookings */}
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Wedding</td>
              <td>2024-06-15</td>
              <td>100</td>
              <td>Pending</td>
              <td>
                <button 
                  onClick={() => {
                    if (bookingContainerEditRef.current) {
                      bookingContainerEditRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Edit
                </button>
                <button>Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      <div ref={bookingContainerEditRef} className="booking-container-edit">
        <p>Fill the form to edit an event</p>
      </div>
      <br />
      <div className="booking-form-edit">
        <h2 className="header-wed">Edit your bookings</h2>
        <form className="form-wed-edit">
          {/* Add form fields for editing */}
          <label className="label-wed-edit">Id:</label>
          <input className="input-wed-edit" type="text" name="id" />

          <label className="label-wed-edit">Name:</label>
          <input className="input-wed-edit" type="text" name="name" />
          
          <label className="label-wed-edit">Event type:</label>
          <input className="input-wed-edit" type="text" name="event" />

          <label className="label-wed-edit">Date of Event:</label>
          <input className="input-wed-edit" type="date" name="eventDate" />

          <label className="label-wed-edit">Head count:</label>
          <input className="input-wed-edit" type="number" name="theme" />

          <label className="label-wed-edit">Description:</label>
          <input className="input-wed-edit" type="textbox" name="description" />
          {/* Add more form fields as needed */}

          <button className="button-wed-edit" type="submit">Submit</button>
        </form>
        <br />
      </div>

      <br />
      <Footer/>
    </div>
  );
};

export default Booking;
