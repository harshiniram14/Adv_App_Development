import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/Signup.css"; // Import your signup styling if needed

const Signup = () => {
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

    // Validation for username
    if (username.trim().length < 4) {
      setError('Username must be at least four characters long.');
      return;
    }

    // Validation for password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!password.match(passwordRegex)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least six characters long.');
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
    navigate('/About');
  };

  return (
    <div className='page-container'>
      <div className="signup-container">
        <h2 className='header'>Signup Page</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        <form className='signup-form'>
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
          <label className='user-label'>
            Confirm Password:
            <input className='user-input'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <button className='signup-button' type="button" onClick={handleSignup}>
            Signup
          </button>
          {/* Add a login link that redirects to the Login page */}
          <Link to="/Login" className="login-link">Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
