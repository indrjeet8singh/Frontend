import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { backendurl } from '../../Servicepage';
import { FaRegUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../../assets/Userloginpage.css'; 

function Userloginpage() {
    const usenav = useNavigate();

    const [userlogin, usersetlogin] = useState({
        email: "",
        pass: ""
    });

    const updateinput = (e) => {
        const { name, value } = e.target;
        usersetlogin((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const mylogin = async () => {
        const { email, pass } = userlogin;
        if (email === "" || pass === "") {
            toast.error("Email and password cannot be blank");
        } else {
            try {
                const response = await fetch(`${backendurl}/mylogin`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, pass })
                });
                const res = await response.json();
                if (res.status === 422) {
                    toast.success("Login Successful");
                    usenav('/dashboard');
                } else {
                    toast.error("Login failed");
                }
            } catch (error) {
                toast.error("An error occurred");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="header text-center mb-4">
                    <FaRegUser className="icon" />
                    <h2>User Login</h2>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        <HiOutlineMail /> Email Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email ID"
                        name="email"
                        onChange={updateinput}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">
                        <TbPasswordFingerprint /> Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="pass"
                        onChange={updateinput}
                    />
                </div>
                <div className="button-group text-center">
                    <button type="button" className="btn btn-success" onClick={mylogin}>
                        Submit
                    </button>
                    <button type="reset" className="btn btn-danger ms-3">
                        Reset
                    </button>
                    <Link to="/registor" className="btn btn-primary mt-2 ms-3">
                        New Register
                    </Link>
                    <Link to="/dashboard" className="btn btn-secondary mt-2 ms-3">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Userloginpage;
