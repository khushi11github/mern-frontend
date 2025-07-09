import React from 'react'

const Register = () => {
  return (
    <div>
        <form>
            <h1> Register Form  </h1>
            <label htmlFor="fname">First Name :</label><br />
            <input type="text" id="fname" name="fname" placeholder="Enter your first name" required />
            <br /><br/>
            <label htmlFor="lname">Last Name : </label> <br />
            <input type="text" id="lname" name="lname" placeholder="Enter yourlast name" required />
            <br /><br/>
            <label htmlFor="email">Email : </label><br />
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <br /><br/>
            <label htmlFor="password">Password : </label><br />
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            <br />  <br/>       
            <button type="submit">Register</button>
            <br />
        </form>
    </div>
  )
}

export default Register
