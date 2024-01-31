import Adminnavbar from "./Adminnavbar";
import { useState } from 'react';
import "../assets/Adminedit.css";

const Adminedit = () => {
    const [formData, setFormData] = useState({
        eventId: '',
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending data to backend
        console.log(formData);
    };

    return (
        <div>
            <Adminnavbar />
            <br />
            <br />
            <div className="admin-navbar-container">
                <h2>Edit Event</h2>
                <form className='admin-edit-form' onSubmit={handleSubmit}>
                    <div className="admin-edit-group">
                        <label className='admin-edit-label' htmlFor="bookId">Event ID:</label>
                        <input
                            className='admin-edit-input'
                            type="text"
                            id="eventId"
                            name="eventId"
                            value={formData.eventId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-edit-group">
                        <label className='admin-edit-label' htmlFor="eventName">Event Name:</label>
                        <input
                            className='admin-edit-input'
                            type="text"
                            id="eventName"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-edit-group">
                        <label className='admin-edit-label' htmlFor="eventDate">Event Date:</label>
                        <input
                            className='admin-edit-input'
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-edit-group">
                        <label className='admin-edit-label' htmlFor="eventLocation">Location:</label>
                        <input
                            className='admin-edit-input'
                            type="text"
                            id="eventLocation"
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-edit-group">
                        <label className='admin-edit-label' htmlFor="eventDescription">Event Description:</label>
                        <textarea
                            id="eventDescription"
                            name="eventDescription"
                            value={formData.eventDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='admin-edit-button' type="submit">Edit Event</button>
                </form>
            </div>
        </div>
    );
}

export default Adminedit;
