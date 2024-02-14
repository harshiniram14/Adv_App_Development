import { useState, useEffect } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
import "../assets/Adminview.css"

const Adminview = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const response = await axios.get('http://localhost:8080/api/v1/auth/getEvents', config);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Adminnavbar />
      <div>
        <form className="admin-view-form">
          <table className="admin-view-table">
            <thead className="admin-view-thead">
              <tr className="admin-view-trow">
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Event Description</th>
                <th>Event Image</th>
              </tr>
            </thead>
            <tbody className="admin-view-tbody">
              {events.map(event => (
                <tr key={event.eventId}>
                  <td>{event.eventid}</td>
                  <td>{event.eventname}</td>
                  <td>{event.eventdesc}</td>
                  <td>{event.eventimg}</td>
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
