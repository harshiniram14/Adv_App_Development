import Adminnavbar from "./Adminnavbar";
import "../assets/Adminview.css"

const Adminview = () => {
  // Sample events data (replace with actual data)
  const events = [
    { id: 1, name: 'Event 1', date: '2024-01-31', location: 'Location 1' },
    { id: 2, name: 'Event 2', date: '2024-02-15', location: 'Location 2' },
    { id: 3, name: 'Event 3', date: '2024-03-05', location: 'Location 3' },
    // Add more event objects as needed
  ];

  return (
    <div>
        <Adminnavbar/>
    <div>
      <form className="admin-view-form">
        <table className="admin-view-table">
          <thead className="admin-view-thead">
            <tr className="admin-view-trow">
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody className="admin-view-tbody">
            {events.map(event => (
                <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
    </div>
  );
};

export default Adminview;
