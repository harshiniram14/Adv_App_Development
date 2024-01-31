import { useNavigate } from 'react-router-dom';
import '../assets/Landingpage.css';

function Landingpage() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    // Replace '/admin' with the actual route path for the admin page.
    navigate('/Adminlogin');
  };

  const handleUserClick = () => {
    // Replace '/user' with the actual route path for the user page.
    navigate('/Login');
  };

  return (
    <div className="landingpage">
      <div className="overlay"></div> {/* Overlay */}
      <div className="land-btn">
        <button className="button" onClick={handleAdminClick}>
          Admin
          <span className="btn-icon" role="img" aria-label="Admin Icon">🔒</span>
        </button>
        <button className="button" onClick={handleUserClick}>
          User
          <span className="btn-icon" role="img" aria-label="User Icon">👤</span>
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
