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


  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const url = `${API_URL}/api/users/${user.id}/profile`;
      const result = await axios.patch(url, profile);
      setError("Profile Updated Successfully");
      console.log(result.data);
      fetchProfile();

      

    }catch(err){
      console.log(err);
      setError("Something went wrong");
    }
  }
  return (
    <div className="profile-container" >
  
      <h3>My Profile</h3>

    <form onSubmit={handleSubmit}>
  <input
    type="text"
    value={profile.firstName}
    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
  />
  <input
    type="text"
    value={profile.lastName}
    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
  />
  <input
    type="email"
    value={profile.email}
    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
  />
  <input
    type="password"
    value={profile.password}
    onChange={(e) => setProfile({ ...profile, password: e.target.value })}
  />
  <button type="submit">Update Profile</button>
</form>


    </div>
  );
}