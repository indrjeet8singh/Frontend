
import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { backendurl } from '../../Servicepage';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {


const appNavigate = useNavigate();

const feedinput = (e) => {
    const { name, value } = e.target;
    setdata((a) => {
        return {
            ...a,
            [name]: value
        }
    })
}



const [feedata, setdata] = useState({
    username: "",
    email: "",
    subject: "",
    message: ""
});

const feedregister = async () => {

    if (feedata.username.length>=3) {

        const { username, email, subject, message } = feedata;
        const mydata = await fetch(`${backendurl}/feedbackdata`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username, email, subject, message
            })
        })
        const res = await mydata.json();
        console.log(res);
        if (res.status === 255) {
            toast.success(" excellence submitted  successfully");
            appNavigate("/");
        }
        else if(res.status===450)
        {
            toast.success("data submit successfully");
        }
        else
        {
            toast.success("data submit successfully"); 
        }

    }
    else {
        toast.warning("Please fill your feedback");
    }


}






  return (
    <section className="contact-us mt-4">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Contact Us</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-5">
            <h5>Join our community; share your details:</h5>
            <p>Thank you for your interest in our business.</p>
          </div>
          <div className="col-md-7">
            <ul className="contact-info">
              <li>
                <i className="far fa-envelope"></i>
                <span>indrjeet8singh@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-mobile"></i>
                <span>+91-9927745536</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>City- Hasanpur, District-Amroha, State-Uttar Pradesh Pin Code: 244241</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="250"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map Location"
            ></iframe>
          </div>
          <div className="col-md-6">
          <form>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8 p-3'>
                        <div className=''>
                            <div className='row'>
                         
                         
                                <div className='col-12 text-center'>
                                    <h5 style={{color:"skyblue"}}>Your feedback</h5>
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Full Name</label>
                                    <input type='text' className='form-control' placeholder='Full Name' name='username' onChange={feedinput} value={feedata.username} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Email Id</label>
                                    <input type='email' className='form-control' placeholder='email' name='email' onChange={feedinput} />

                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">subject No</label>
                                    <input type='text' className='form-control' placeholder='subject' name='subject' onChange={feedinput} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">message</label>
                                    <input type='text' className='form-control' name='message' onChange={feedinput} />
                                </div>


                                <div className='col-12 p-2 mt-2 text-center'>
                                    <input type='button' value="Send Message" className='btn btn-success' onClick={feedregister} />
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;






