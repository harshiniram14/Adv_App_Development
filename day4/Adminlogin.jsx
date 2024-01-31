import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/Adminlogin.css";

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleLogin = () => {
    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    // Reset error state
    setError('');

    // Add your authentication logic here
    console.log('Logging in with:', { username, password });
    // For a real application, you would typically make an API call to authenticate the user

    // Redirect to another page (e.g., Navbar) after successful login
    navigate('/Adminview');
  };

  return (
    <div className='admin-page-container'>
      <div className="admin-login-container">
        <h2 className='admin-header'>Login Page</h2>
        {error && <p className="admin-error-para" style={{ color: 'red' }}>{error}</p>}
        <form className='admin-login-form'>
          <label className='admin-label'>
            Username:
            <input className='admin-input'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label className='admin-label'>
            Password:
            <input className='admin-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className='admin-login-button' type="button" onClick={handleLogin}>
            Login
          </button>
          {/* Add a signup link that redirects to the Signup page */}
          <Link to="/Adminsignup" className="admin-signup-link">Not a admin? Signup</Link>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
