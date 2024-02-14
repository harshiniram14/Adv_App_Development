import { useState } from 'react';
import axios from 'axios';
import Adminnavbar from "./Adminnavbar";
import "../assets/Adminedit.css";

const Adminedit = () => {
    const [formData, setFormData] = useState({
        eventname: '',
        eventdesc: '',
        eventimg: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending form data to the backend API using Axios POST request
            const response = await axios.put(`http://localhost:8080/api/v1/auth/updateEvents/${formData.eventname}`, formData);
            console.log(response.data); // Logging the response from the backend
            // Resetting the form data after successful submission
            setFormData({
                eventname: '',
                eventdesc: '',
                eventimg: ''
            });
            // You can add further logic here, like showing a success message
        } catch (error) {
            console.error('Error:', error); // Logging any errors that occurred
            // You can add further logic here, like showing an error message
        }
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
                        <label className='admin-edit-label' htmlFor="eventName">Event Name:</label>
                        <input
                            className='admin-edit-input'
                            type="text"
                            id="eventname"
                            name="eventname"
                            value={formData.eventname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-edit-group">
                        <label className='admin-edit-label' htmlFor="eventDescription">Event Description:</label>
                        <textarea
                            id="eventdesc"
                            name="eventdesc"
                            value={formData.eventdesc}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-edit-group">
                        <label className='admin-edit-label' htmlFor="imageUrl">Image URL:</label>
                        <input
                            className='admin-edit-input'
                            type="text"
                            id="eventimg"
                            name="eventimg"
                            value={formData.eventimg}
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
