import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../assets/Login.css"; // Assuming you have a CSS file for styling

const Login = () => {
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
        console.log("Login successful:", response.data);
        navigate("/About");
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
        <h1 className="ask">Login</h1>
        <br />
        <TextField
          onChange={handleEmail}
          value={email}
          className="inp"
          label="Email"
        />
        <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
          {formErrors.email}
        </p>
        <br />
        <TextField
          onChange={handlePassword}
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
          New user? Register{" "}
          <Link to="/Signup" element>
            here
          </Link>
        </p>
        <br />
        <Button
          type="submit"
          id="login-button"
          variant="contained"
          // onClick={handleSubmit}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
