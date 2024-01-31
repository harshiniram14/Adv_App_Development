import Adminnavbar from "./Adminnavbar";
import { useState } from 'react';
import "../assets/Admindelete.css"

const Admindelete = () => {
    const [eventId, setEventId] = useState('');

    const handleChange = (e) => {
        setEventId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending data to backend
        console.log("Deleting event with ID:", eventId);
        // Reset the eventId after submission
        setEventId('');
    };

    return (
        <div>
            <Adminnavbar />
            <br /><br />
            <div className="admin-delete-container">
                <h2>Delete Event</h2>
                <form className="admin-delete-form" onSubmit={handleSubmit}>
                    <div className="admin-delete-group">
                        <label htmlFor="eventId">Event ID:</label>
                        <input
                            type="text"
                            id="eventId"
                            name="eventId"
                            value={eventId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="admin-delete-button" type="submit">Delete Event</button>
                </form>
            </div>
        </div>
    );
}

export default Admindelete;
