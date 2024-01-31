// Allbookings.jsx

import Adminnavbar from './Adminnavbar';
import "../assets/Allbookings.css";

const Allbookings = () => {
  // Mock data for demonstration
  const bookings = [
    { id: 1, name: 'John Doe', eventType: 'Wedding', eventDate: '2024-06-15', headCount: 100, status: 'Requested' },
    // Add more mock booking data as needed
  ];

  const handleAccept = (id) => {
    // Handle logic to accept the booking
    console.log(`Accepting booking with ID ${id}`);
  };

  const handleDecline = (id) => {
    // Handle logic to decline the booking
    console.log(`Declining booking with ID ${id}`);
  };

  return (
    <div>
      <Adminnavbar />
      <table className='allbookings-table'>
        <thead className='allbookings-thead'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Event Type</th>
            <th>Date</th>
            <th>Head Count</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody className='allbookings-tbody'>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.eventType}</td>
              <td>{booking.eventDate}</td>
              <td>{booking.headCount}</td>
              <td>{booking.status === 'Requested' ? 
                  <div>
                    <button className='accept-button' onClick={() => handleAccept(booking.id)}>Accept</button>
                    <button className='decline-button' onClick={() => handleDecline(booking.id)}>Decline</button>
                  </div>
                  : booking.status}
              </td>
              {/* <td>
                <button className='edit-button'>Edit</button>
                <button className='delete-button'>Delete</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allbookings;
