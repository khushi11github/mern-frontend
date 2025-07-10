import React from 'react'
import './Register.css';
import { useState } from 'react';
import axios from 'axios';


const Register = () => {
  const [user,setUser] = useState({});
  const [error,setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "http://localhost:8080/api/users/register";
      const url = "https://mern-backend-1.onrender.com/api/users/register";
      
      const response = await axios.post(url, user);
      console.log(response);

      setError("Data submitted Successfully");
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
      console.log(user);
    }
  }
  return (
    <div class="parent">
    
        <form className="container" method="POST">
          <div className="subContainer">
            <h1> Register Form  </h1>
              {error && <div className="error">{error}</div>}
        <br />
            <label htmlFor="fname">First Name :</label><br />
            <input type="text" onChange={(e) => setUser({ ...user, firstName: e.target.value })} id="fname" name="fname" placeholder="Enter your first name" required />
            <br /><br/>
            <label htmlFor="lname">Last Name : </label> <br />
            <input type="text"   onChange={(e) => setUser({ ...user, lastName: e.target.value })} id="lname" name="lname" placeholder="Enter yourlast name" required />
            <br /><br/>
            <label htmlFor="email">Email : </label><br />
            <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" name="email" placeholder="Enter your email" required />
            <br /><br/>
            <label htmlFor="password">Password : </label><br />
            <input type="password" id="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Enter your password" required />
            <br />  <br/>       
            <button type="submit" onClick={handleSubmit}>Register</button>
            <br />
            </div>
        </form>
    </div>
  )
}


export default Register

// import React from 'react'
// import './Register.css';

// import {useRef} from 'react'; 


// const Register = () => {
  
//   const firstName = useRef();
//   const lastName = useRef();
// const email = useRef();
// const password = useRef(); 
//   const handleSubmit=(e)=>{

//     try{}    
//     const user = {
//       firstName: firstName.current.value,
//       lastName: lastName.current.value,
//       email: email.current.value,
//       password: password.current.value
//     };
//     e.preventDefault();
//     console.log(user);

//   }
//   return (
//     <div class="parent">
//         <form className="container" method="POST">
//           <div className="subContainer">
//             <h1> Register Form  </h1>
//             <label htmlFor="fname">First Name :</label><br />
//             <input type="text" id="fname" name="fname" placeholder="Enter your first name"  ref={firstName} required />
//             <br /><br/>
//             <label htmlFor="lname">Last Name : </label> <br />
//             <input type="text"    id="lname" name="lname" placeholder="Enter yourlast name" ref ={lastName} required />
//             <br /><br/>
//             <label htmlFor="email">Email : </label><br />
//             <input type="text" id="email" name="email" placeholder="Enter your email" ref ={email}required />
//             <br /><br/>
//             <label htmlFor="password">Password : </label><br />
//             <input type="password" id="password" name="password" ref={password} placeholder="Enter your password" required />
//             <br />  <br/>       
//             <button type="submit" onClick={handleSubmit}>Register</button>
//             <br />
//             </div>
//         </form>
//     </div>
//   )
// }


// export default Register

