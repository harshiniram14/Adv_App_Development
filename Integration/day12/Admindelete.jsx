import Adminnavbar from "./Adminnavbar";
import { useState } from 'react';
import axios from 'axios'; // Import Axios
import "../assets/Admindelete.css"

const Admindelete = () => {
    const [eventname, setEventName] = useState(''); // Change eventId to eventName

    const handleChange = (e) => {
        setEventName(e.target.value);
    };

    const handleSubmit = async (e) => { // Make handleSubmit asynchronous
        e.preventDefault();
        try {
            // Send delete request to backend API using Axios
            const response = await axios.delete(`http://localhost:8080/api/v1/auth/deleteEvents/${eventname}`);
            console.log(response.data); // Log the response from the backend
            // Reset the eventName after successful deletion
            setEventName('');
            // You can add further logic here, like showing a success message
        } catch (error) {
            console.error('Error:', error); // Log any errors that occurred
            // You can add further logic here, like showing an error message
        }
    };

    return (
        <div>
            <Adminnavbar />
            <br /><br />
            <div className="admin-delete-container">
                <h2>Delete Event</h2>
                <form className="admin-delete-form" onSubmit={handleSubmit}>
                    <div className="admin-delete-group">
                        <label htmlFor="eventName">Event Name:</label> {/* Change label to Event Name */}
                        <input
                            type="text"
                            id="eventName"
                            name="eventName"
                            value={eventname}
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
