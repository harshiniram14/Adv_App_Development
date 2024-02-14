
import { useNavigate } from 'react-router-dom';
import '../assets/Logo.css'; // Import the CSS file where you define the styles

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to LandingPage when the logo is clicked
    navigate('/Landingpage');
  };

  return (
    <div className="logo-container" onClick={handleClick}>
      {/* Your logo image goes here */}
      <img className="logo-img" src="https://i.postimg.cc/mr6ZRR4Q/logoo.png" alt="Logo" />
    </div>
  );
};

export default Logo;
