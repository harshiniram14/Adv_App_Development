import { Link } from "react-router-dom";
import "../assets/Adminnavbar.css"

const Adminnavbar = () => {
  return (
    <div>
    <nav className="admin-navbar">
      <ul>
        <li><Link to="/Adminview">View all events</Link></li>
        <li><Link to="/Adminadd">New event</Link></li>
        <li><Link to="/Adminedit">Edit</Link></li>
        <li><Link to="/Admindelete">Delete</Link></li>
        <li><Link to="/Allbookings">Bookings</Link></li>
        <li><Link to="/Logo">Logout</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Adminnavbar