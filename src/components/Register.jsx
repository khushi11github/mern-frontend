import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const url = `${API_URL}/api/users/register`;  
      console.log("API URL:", url);

      const response = await axios.post(url, user);
      console.log(response);

      setError("Data submitted Successfully");
      Navigate("/login"); 
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
      console.log(user);
    }
  };

  return (
    <div className="parent">
      <form className="container" method="POST">
        <div className="subContainer">
          <h1>Register Form</h1>
          {error && <div className="error">{error}</div>}

          <br />
          <label htmlFor="fname">First Name:</label><br />
          <input
            type="text"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            id="fname"
            name="fname"
            placeholder="Enter your first name"
            required
          />
          <br /><br />

          <label htmlFor="lname">Last Name:</label><br />
          <input
            type="text"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            id="lname"
            name="lname"
            placeholder="Enter your last name"
            required
          />
          <br /><br />

          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <br /><br />

          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <br /><br />
          

          <button type="submit" onClick={handleSubmit}>Register</button>
          <br /><br />

          <Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
