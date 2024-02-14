import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../assets/Signup.css"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMail = (event) => {
    setEmail(event.target.value);
  };

  const handlePwd = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormErrors(validate({ name, email, password }));

    if (isSubmit) {
      try {
        // Make POST request to register endpoint
        const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
          name,
          email,
          password,
        });
        console.log("Registration successful:", response.data);

        // Generate token after successful registration
        const tokenResponse = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
          email,
          password,
        });
        const { token, id } = tokenResponse.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(id));
        console.log("Token generated and stored in local storage");

        // Redirect to login page after successful sign-up
        navigate("/Login");
      } catch (error) {
        console.error("Error registering:", error.response.data.error);
      }
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
    }

    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);

    return errors;
  };

  return (
    <div id="log-box-main">
      <form className="emp-box" onSubmit={handleSubmit}>
        <h1 className="ask">Sign Up</h1>
        <br />
        <TextField
          onChange={handleName}
          value={name}
          className="inp"
          label="Name"
        />
        <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
          {formErrors.name}
        </p>
        <br />
        <TextField
          onChange={handleMail}
          value={email}
          className="inp"
          label="Email"
        />
        <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
          {formErrors.email}
        </p>
        <br />
        <TextField
          onChange={handlePwd}
          value={password}
          className="inp"
          type="password"
          label="Password"
        />
        <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
          {formErrors.password}
        </p>
        <br />
        <p>
          Already have an account? Login <Link to="/Login">here</Link>
        </p>
        <br />
        <Button
          type="submit-signup"
          id="signup-button"
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
