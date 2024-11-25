

import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { backendurl } from '../../Servicepage';
import { FaRegUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../../assets/Userloginpage.css'; 

const Myloginpage = () => {
  const [pshow, setPshow] = useState(false);

  // JSX for password toggle
  const toggler = (
    <span className='bg-transparent border-0 top-0 rounded btn-primary w-25'>
      <span
        className='w-100 bg-transparent border-0 rounded text-primary'
        onClick={() => setPshow(!pshow)}
      >
        {pshow ? 'Hide' : 'Show'}
      </span>
    </span>
  );

  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    pass: ""
  });

  const updateInput = (e) => {
    const { name, value } = e.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const myLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const { email, pass } = userLogin;

    // Validate that email and password are not blank
    if (!email || !pass) {
      toast.error("Email and password cannot be blank");
      return;
    }

    try {
      const response = await fetch(`${backendurl}/mylogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pass })
      });
      const res = await response.json();
      
      if (res.status === 423) {
        toast.success("Login Successful");
        navigate('/dashboard'); // Redirect to the dashboard on successful login
      } else {
        toast.error(res.error || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="header text-center mb-4">
          <FaRegUser className="icon" />
          <h2>User Login</h2>
        </div>
        <form onSubmit={myLogin}>
          <div className="form-group">
            <label className="form-label">
              <HiOutlineMail /> Email Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Email ID"
              name="email"
              value={userLogin.email}
              onChange={updateInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label d-flex justify-content-between ">
              <span><TbPasswordFingerprint />Password</span>
              {toggler}
            </label>
            <input
              className="form-control"
              placeholder="Password"
              name="pass"
              value={userLogin.pass}
              onChange={updateInput}
              type={pshow ? 'text' : 'password'}
            />
          </div>
          <div className="button-group text-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <Link to="registor" className="btn btn-primary mt-2 ms-3">
              New Register
            </Link>
            <Link to="/dashboard">Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Myloginpage;
