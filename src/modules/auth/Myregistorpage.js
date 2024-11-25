
import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { backendurl } from '../../Servicepage';
import { FaRegUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { region } from './Province';

function Myregistorpage() {
    const [pshow, setPshow] = useState(false);
    const navigate = useNavigate();

    const [insdata, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        profile: "",
        state: "",
        pass: ""
    });

    // Handling input updates
    const updateInput = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Form submission handler
    const registerPage = async () => {
        const { fullname, email, phone, dob, gender, profile, state, pass } = insdata;

        // Basic form validation
        if (fullname.length >= 5 && email && phone && dob && gender && profile && state && pass) {
            try {
                const response = await fetch(`${backendurl}/createdata`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fullname, email, phone, dob, gender, profile, state, pass })
                });
                const res = await response.json();
                if (res.status === 255) {
                    // Store user data in session storage
                    sessionStorage.setItem('user', JSON.stringify({ fullname, email, phone, dob, gender, profile, state }));

                    toast.success("Data submitted successfully");
                    navigate("/"); // Redirect to home page on success
                } else if (res.status === 450) {
                    toast.warning("Some fields are missing");
                } else {
                    toast.warning("All fields are mandatory");
                }
            } catch (error) {
                toast.error("An error occurred");
            }
        } else {
            toast.error("Please fill all fields properly");
        }
    };

    // Reset form handler
    const resetForm = () => {
        setData({
            fullname: "",
            email: "",
            phone: "",
            dob: "",
            gender: "",
            profile: "",
            state: "",
            pass: ""
        });
    };

    // JSX for the password toggle button
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

    return (
        <Fragment>
            <form>
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-sm-8 p-3'>
                            <div className='container-fluid border p-5 bg-white shadow rounded'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <span style={{ fontSize: "45px", color: 'skyblue' }}>
                                            <FaRegUser />
                                        </span>
                                        <h2 style={{ color: "skyblue" }}>User Register</h2>
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Full Name'
                                            name='fullname'
                                            value={insdata.fullname}
                                            onChange={updateInput}
                                        />
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label">Email ID</label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            placeholder='Email'
                                            name='email'
                                            value={insdata.email}
                                            onChange={updateInput}
                                        />
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label">Phone No</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Phone'
                                            name='phone'
                                            value={insdata.phone}
                                            onChange={updateInput}
                                        />
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label">DOB</label>
                                        <input
                                            type='date'
                                            className='form-control'
                                            name='dob'
                                            value={insdata.dob}
                                            onChange={updateInput}
                                        />
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label">Gender</label><br />
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                onChange={updateInput}
                                            />
                                            <label className="form-check-label">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                onChange={updateInput}
                                            />
                                            <label className="form-check-label">Female</label>
                                        </div>
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label">State</label>
                                        <select className='form-select' name='state' onChange={updateInput}>
                                            <option value="">Select State</option>
                                            {
                                                region.map((S) => (
                                                    <option key={S.state} value={S.state}>{S.state}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label">Profile Picture</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Profile URL'
                                            name='profile'
                                            value={insdata.profile}
                                            onChange={updateInput}
                                        />
                                    </div>
                                    <div className='col-md-6 p-2 mt-2'>
                                        <label className="form-label  d-flex justify-content-between ">Create Password {toggler}</label>
                                        <input
                                            type={pshow ? 'text' : 'password'}
                                            className='form-control'
                                            placeholder='Password'
                                            name='pass'
                                            value={insdata.pass}
                                            onChange={updateInput}
                                        />
                                    </div>
                                    <div className='col-12 p-2 mt-2 text-center'>
                                        <input
                                            type='button'
                                            value="Register Now"
                                            className='btn btn-success'
                                            onClick={registerPage}
                                        />
                                        <input
                                            type='reset'
                                            value="Cancel"
                                            className='btn btn-danger ms-3'
                                            onClick={resetForm}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-primary ms-3"
                                        >
                                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                                Login Page
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default Myregistorpage;
