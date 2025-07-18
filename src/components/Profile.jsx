import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import "./Profile.css"; 
export default function Profile() {
  const [profile, setProfile] = useState({});
  const { user } = useContext(AppContext);
  const [error, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const fetchProfile = async () => {
    try {
      const url = `${API_URL}/api/users/${user.id}/profile`;
      const result = await axios.get(url);
      setProfile(result.data);
      console.log(profile);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="profile-container" >
  
      <h3>My Profile</h3>

     <form>
      <p>
        <input type="text" placeholder="Enter your First Name" defaultValue={profile.firstName} />
      </p>
      <p>
        <input type="text" placeholder="Enter Your last name" defaultValue={profile.lastName} />
      </p>
      <p>
        <input type="text" placeholder="Enter Your Email" defaultValue={profile.email} />
      </p>
      <p>
        <input type="password" placeholder="Enter Your Password" defaultValue={profile.password} />
      </p>
      <button>Update Profile</button>
       </form>

    </div>
  );
}