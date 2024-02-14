import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../assets/Adminlogin.css";

const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormErrors(validate({ email, password }));

    if (isSubmit) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
          email,
          password,
        });
        const { token, id } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(id));
        console.log("Successful Admin Login");
        navigate("/Adminview");
      } catch (error) {
        console.error("Error logging in:", error.response.data.error);
      }
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (values.email.length < 5) {
      errors.email = "Email format is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);

    return errors;
  };

  return (
    <div id="admin-login-main">
      <form className="admin-login-box" onSubmit={handleSubmit}>
        <h1 className="admin-ask">Admin Login</h1>
        <br />
        <TextField
          onChange={handleEmail}
          value={email}
          className="admin-inp"
          label="Email"
        />
        <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
          {formErrors.email}
        </p>
        <br />
        <TextField
          onChange={handlePassword}
          value={password}
          className="admin-inp"
          type="password"
          label="Password"
        />
        <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
          {formErrors.password}
        </p>
        {/* <br />
        <p>
          New user? Register{" "}
          <Link to="/Adminsignup" className="admin-signup-link">
            here
          </Link>
        </p> */}
        <br />
        <Button
          type="submit"
          id="admin-login-button"
          variant="contained"
          className="admin-login-button"
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Adminlogin;
