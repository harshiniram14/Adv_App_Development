import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/Login.css";

const Login = () => {
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

    // Additional validation for username
    if (username.trim().length < 4) {
      setError('Username must be at least four characters long.');
      return;
    }

    // Additional validation for password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!password.match(passwordRegex)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least six characters long.');
      return;
    }

    // Reset error state
    setError('');

    // Add your authentication logic here
    console.log('Logging in with:', { username, password });
    // For a real application, you would typically make an API call to authenticate the user

    // Redirect to another page (e.g., Navbar) after successful login
    navigate('/About');
  };

  return (
    <div className='page-container'>
      <div className="background-image"></div>
      <div className="login-container">
        <h2 className='header'>Login Page</h2>
        {error && <p className="error-para" style={{ color: 'red' }}>{error}</p>}
        <form className='login-form'>
          <label className='user-label'>
            Username:
            <input className='user-input'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label className='user-label'>
            Password:
            <input className='user-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className='login-button' type="button" onClick={handleLogin}>
            Login
          </button>
          {/* Add a signup link that redirects to the Signup page */}
          <Link to="/Signup" className="signup-link">Not a user? Signup</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
