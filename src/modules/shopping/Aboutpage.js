import React, { useEffect, useState } from "react";
import myimg from "../../assets/images/imagebw.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendurl } from "../../Servicepage";

const Aboutpage = () => {
    const [mydata, setdata] = useState([]);
    const [myfruitdata, setFruitData] = useState([]);
    const myalldata = () => {
        axios.get(`${backendurl}/allusers`).then((d) => {
            console.log(d.data);
            setdata(d.data)
        })
    }
    useEffect(() => {
        myalldata();
        axios
        .get(`${backendurl}/allfruits`)
        .then((response) => {
          setFruitData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching fruit data:", error);
        });
    }, []);
    
    


  return (
    <section className="inner-section about-company">
      <section className="section countdown-part">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/dashboard' className="text-decoration-none text-secondary">Home</Link></li>
              <li className="breadcrumb-item active">About Us</li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                src={myimg}
                alt="Company's Founder"
                className="img-fluid rounded-circle"
              />
              <p className="pt-2">Indra Talwar:-Mern Stack Developer</p>
            </div>
            <div className="col-lg-6">
              <div className="countdown-content">
                <h3 className="text-success">Our Journey</h3>
                <p>
                  This is what FRESH-FRUITY, a startup born in the midst of the
                  pandemic, is doing with its online-to-offline model of
                  distributing fruits and .
                </p>
                <p>
                  FRESH-FRUITY is the creation of eGreen Farms, a food retail
                  company based in Delhi that was established in 2018. Indra
                , the company's founder, began developing
                  FRESH-FRUITY well before the pandemic began. However, due to
                  the COVID-19 outbreak, its introduction was pushed back. The
                  platform was finally launched in January 2021.
                </p>
                <h4 className="text-start text-success">
                  What Problems does FRESH-FRUITY Solve?
                </h4>
                <p>
                  Essentially, FRESH-FRUITY provides a future-ready experience
                  for purchasing farm-fresh Fruits and , in which customers can
                  book a grocery cart on the app (similar to booking a cab),
                  wait for it to arrive at their door, and handpick the best
                  stock themselves.
                  <br />
                  FRESH-FRUITY employs specialized supply logistics to deliver
                  exclusive carts containing a variety of Fruits and at the
                  customer's defined time slot. The carts are organized by
                  localities/sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mb-5 mt-3">
        <h4 className="text-success">Indra, the company's founder, says:</h4>
        <p>
          "Demand varies according to location. Fruit and vegetable sales could
          be demographically aligned to Bengal if a customer is staying at CR
          Park [in Delhi]. Similarly, those things may be of little value in a
          place like Rohini, which is inhabited by people from Haryana and Uttar
          Pradesh."
        </p>
        <p>
          "Unlike other online grocery platforms that require consumers to
          pre-order products and have them shipped, FRESH-FRUITY allows
          customers to touch, sound, and handpick the fruits and at the time of
          purchase."
        </p>
        <p>
          "They do just what they will do in a typical mandi, but from the
          comfort of their own homes. 'We're keeping the old thela tradition
          alive, but in a new package,' Indra says."
        </p>
        <h5 className="text-success">He Goes on to clarify the need for such a service, saying:</h5>
        <p>
          "During the pandemic, people were accustomed to purchasing fruits and
          online. However, the issue with online grocery is that you are limited
          to what they offer. Often the packaging is incorrect, and other times
          the consistency is subpar. When a cart arrives at your door, you can
          pick from the stock and do not have to depend on what is delivered."
        </p>
      </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-xl-6 col-12">
            <div className="about-content">
              <h2 className="text-success">Handpick Your Favorite Fruits and .</h2>
              <p>
                FRESH-FRUITY is the creation of eGreen Farms, a food retail
                company based in Delhi that was established in 2019. We are
                delivering customers in Delhi NCR and providing them a
                hassle-free experience with us thus they can order directly from
                anywhere. We are serving our customers in two different methods.
                The first one is directly scheduling a cart to home then
                handpick fresh fruits and in front of the eyes or can add to the
                cart then our delivery executive will directly deliver to
                doorsteps. Our major responsibility is to provide customers with
                a "happy shopping with us" experience. FRESH-FRUITY offers
                healthy and fresh fruits picked from the farm directly, then we
                store them in our warehouse with minimal touch. Our quality
                in-charge checks the quality before delivering fruits and to
                customers.
              </p>
            </div>
            <ul className="about-list">
              <li>
                <h3>{mydata.length}</h3>
                <h6 className="text-success">registered users</h6>
              </li>
              
              
              <li>
                <h3>{myfruitdata.length}</h3>
                <h6 className="text-success">total products</h6>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-xl-6 col-12">
            <div className="about-img">
              <img
                src="https://egreensapp.s3.ap-south-1.amazonaws.com/LIVE/app/assets/banner-01.webp"
                alt="about"
                className="img-fluid"
              />
              <img
                src="https://egreensapp.s3.ap-south-1.amazonaws.com/LIVE/app/assets/banner-02.webp"
                alt="about"
                className="img-fluid"
              />
              <img
                src="https://egreensapp.s3.ap-south-1.amazonaws.com/LIVE/app/assets/banner-03.webp"
                alt="about"
                className="img-fluid"
              />
              <img
                src="https://egreensapp.s3.ap-south-1.amazonaws.com/LIVE/app/assets/banner-04.webp"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="about-choose mt-5">
        <div className="container">
          <div className="row">
            <div className="col-11 col-md-9 col-lg-7 col-xl-6 mx-auto">
              <div className="section-heading mt-5 mb-5">
                <h4 className="text-center text-success">Why FRESH-FRUITY?</h4>
                <p className="text-center">
                  To get Farm Fresh Fruits at your Doorstep.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <div className="choose-text">
                  <h4 className="text-success">Farm Fresh & Delicious</h4>
                  <p>Fresh Juicy fruits and directly from the farms</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fas fa-sink"></i>
                </div>
                <div className="choose-text">
                  <h4 className="text-success">Hygienically Washed</h4>
                  <p>Hygienically washed and stored</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="choose-text">
                  <h4 className="text-success">Book Cart</h4>
                  <p>Cart will be there with a farm fresh fruits & veggies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <div className="choose-text">
                  <h4 className="text-success">Handpick Your Favourites</h4>
                  <p>
                    Ease of handpicking fresh stock from a cart at Your Doorstep
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="fas fa-truck-loading"></i>
                </div>
                <div className="choose-text">
                  <h4 className="text-success">Free Home Delivery</h4>
                  <p>Fast and Free Delivery</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="far fa-clock"></i>
                </div>
                <div className="choose-text">
                  <h4 className="text-success">Ultimate offer</h4>
                  <p>Avail Daily exciting offers at great deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Aboutpage;
