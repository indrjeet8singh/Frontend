
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './MyProfile.css';
import { backendurl } from '../../Servicepage';

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch user data from session storage first
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (storedUser) {
      setUser(storedUser); // Set user state if found in session storage
      setLoading(false); // Stop loading
    } else {
      // Fetch user data from API if not found in session storage
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem('token'); // Assuming token is stored in local storage

          if (!token) {
            setError("Token not found. Please log in again.");
            setLoading(false);
            return;
          }

          console.log('Token:', token); // Debugging token

          const response = await axios.get(`${backendurl}/validuser`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          
          const userData = response.data.firsttimevalid;

          // Store user data in session storage for future use
          sessionStorage.setItem('user', JSON.stringify(userData));
          setUser(userData); // Set user state
          setLoading(false);
        } catch (err) {
          console.error('Error:', err.response?.data || err.message); // Improved error logging
          setError("Failed to fetch user data. Please try again.");
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    sessionStorage.removeItem('user'); // Clear user data from session storage
    navigate('/'); // Redirect to the login page
  };

  if (loading) {
    return <div className='mt-5'>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-page mt-5 top-50">
      <h1>Welcome, {user?.fullname}</h1>
      <div className="profile-details">
        <img src={user?.profile} alt="User Avatar" className="profile-avatar" />
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Date of Birth:</strong> {user?.dob}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>State:</strong> {user.state}</p>
      </div>
      <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
    </div>
  );
};

export default MyProfile;
