import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/Adminsignup.css"; // Import your signup styling if needed

const Adminsignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    // Basic validation
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Reset error state
    setError('');

    // Add your signup logic here
    console.log('Signing up with:', { username, password });

    // Redirect to another page (e.g., dashboard) after successful signup
    navigate('/Adminview');
  };

  return (
    <div className='admin-page-container'>
      <div className="admin-signup-container">
        <h2 className='admin-header'>Signup Page</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        <form className='admin-signup-form'>
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
          <label className='admin-label'>
            Confirm Password:
            <input className='admin-input'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <button className='admin-signup-button' type="button" onClick={handleSignup}>
            Signup
          </button>
          {/* Add a login link that redirects to the Login page */}
          <Link to="/Adminlogin" className="admin-login-link">Already have an admin? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Adminsignup;
