import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/Adminsignup.css";

const Adminsignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormErrors(validate({ name, email, password }));

    if (isSubmit) {
      // Handle admin sign-up logic here
      navigate("/AdminLogin"); // Redirect to admin login page after successful sign-up
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (values.email.length < 5) {
      errors.email = "Email invalid format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);

    return errors;
  };

  return (
    <div id="admin-signup-main">
      <form className="admin-signup-box" onSubmit={handleSubmit}>
        <h1 className="admin-ask">Admin Sign Up</h1>
        <br />
        <TextField
          onChange={handleName}
          value={name}
          className="admin-inp"
          label="Name"
        />
        {formErrors.name && (
          <p className="admin-signup-error">{formErrors.name}</p>
        )}
        <br />
        <br />
        <TextField
          onChange={handleEmail}
          value={email}
          className="admin-inp"
          label="Email"
        />
        {formErrors.email && (
          <p className="admin-signup-error">{formErrors.email}</p>
        )}
        <br />
        <br />
        <TextField
          onChange={handlePassword}
          value={password}
          className="admin-inp"
          type="password"
          label="Password"
        />
        {formErrors.password && (
          <p className="admin-signup-error">{formErrors.password}</p>
        )}
        <br />
        <br />
        <p>
          Already have an account? Login{" "}
          <Link to="/Adminlogin" className="admin-login-link">
            here
          </Link>
        </p>
        <br />
      
        <Button
          type="submit"
          id="admin-signup-button"
          variant="contained"
          className="admin-signup-button"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Adminsignup;
