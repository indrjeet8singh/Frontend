import React from 'react'
import {  FaFacebookSquare} from "react-icons/fa";
import { FaGithub, FaLinkedinIn, } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";





function Myfooter() {
  return (
    <div className="container bg-light">
    <footer className="py-5">
      <div className="row" >
        <div className="col-6 col-md-3 mb-3" >
          <h5 className='text-success'>Contact Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary"> &nbsp;<GoMail className='text-success'/>&nbsp; indrjeet8singh@gmail.com</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary"> &nbsp;<IoPhonePortraitOutline className='text-success'/>&nbsp; 9927745536</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary"> &nbsp;<IoLocationOutline className='text-success'/>&nbsp; City-Hasanpur District-Amroha Uttar Pradesh Pin Code 244241</Link></li>
           </ul>
        </div>
  
        <div className="col-6 col-md-3 mb-3">
          <h5 className='text-success'>Company</h5>
          <ul className="nav flex-column ">
            <li className="nav-item mb-2"><Link to="/dashboard" className="nav-link p-0 text-secondary">Home</Link></li>
            <li className="nav-item mb-2"><Link to="Aboutpage" className="nav-link p-0 text-secondary">About</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary">FAQs</Link></li>
          </ul>
        </div>
  
        <div className="col-6 col-md-3 mb-3">
          <h5 className='text-success'>For You</h5>
          <ul className="nav flex-column">
            
            <li className="nav-item mb-2"><Link to="ContactUs" className="nav-link p-0 text-secondary">ContactUs</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary">Features</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-secondary">About</Link></li>
          </ul>
        </div>
  
        <div className="col-6 col-md-3 mb-3">
        <h5 className='text-success'>Location</h5>
          <ul className="nav flex-column overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14008.49243502847!2d77.36689595!3d28.6260722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724682427885!5m2!1sen!2sin" style={{width:'300px',height:'150px'}} width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </ul>
        </div>
      </div>
  
      <div className="d-flex flex-column flex-sm-row justify-content-evenly py-4 my-4 border-top">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3 fs-4"><Link className="link-secondarys" to="https://www.linkedin.com/in/indrjeet-singh-675237333"><FaLinkedinIn/></Link></li>
          <li className="ms-3 fs-4"><Link className="link-secondarys text-black" to="https://github.com/indrjeet8singh"><FaGithub/></Link></li>
          <li className="ms-3 fs-4"><Link className="link-secondarys" to="#"><FaFacebookSquare/></Link></li>
        </ul>
      </div>
    </footer>
  </div>
  )
}

export default Myfooter