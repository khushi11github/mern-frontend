// import React, { useContext, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { AppContext } from "../App";

// export default function Login() {
//   const { setUser } = useContext(AppContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const API_URL = import.meta.env.VITE_API_URL;

//   const handleSubmit = async () => {
//     try {
//       const url = `${API_URL}/api/users/login`;
//       const result = await axios.post(url, { email, password });
//       setUser(result.data); // Store user context
//       localStorage.setItem("token", result.data.token); // Store token
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       setError(err?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         <input
//           type="text"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </p>
//       <p>
//         <button onClick={handleSubmit}>Submit</button>
//       </p>
//       <hr />
//       <Link to="/register">Create Account</Link>
//     </div>
//   );
// }



import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
const Login = () => {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Login Submit Triggered");

  try {
    const url = `${API_URL}/api/users/login`;
    const result = await axios.post(url, { email, password });
    console.log("Login success", result.data);
    
    setUser(result.data);
    localStorage.setItem("token", result.data.token);

    navigate("/");
    console.log("Navigated to /");
  } catch (err) {
    console.error("Login error", err);
    setError(err?.response?.data?.message || "Something went wrong");
  }
};

  return (
    <div className="parent">
      <form className="container" method="POST">
        <div className="subContainer">
          <h1 style={{textAlign:"center"}}>Login Form</h1> 
          <br/><br/>
          {error && <div className="error">{error}</div>}

         

          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}   
            name="email"
            placeholder="Enter your email"
            required
          />
          <br /><br />

          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
           value={password}
    onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <br /><br />

          <button type="submit" onClick={handleSubmit}>Login</button>
          <br /><br />

          <Link to="/register">Create Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
