import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/images/logoindra.png";
import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";


function Mynavbar({setSearchTerm}) {
  // --------------scrolling--------------

  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const count = useSelector((state)=> state.counter.value);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navbarStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: scrollingUp ? "translateY(0)" : "translateY(-100%)",
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="Aboutpage">
            <img src={logo} alt="logo" style={{ height: "70px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active hlink"
                  aria-current="page"
                  to="/dashboard"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hlink" to="registor">
                  Register
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle hlink"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Application
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      modules1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      modules2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      modules3
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      modules4
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      modules5
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link hlink " to="Aboutpage">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hlink " to="Vegetables">
                  Vegetables
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hlink " to="/dashboard">
                  Fresh Fruits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hlink text-success " to="https://api.whatsapp.com/send/?phone=+91-9927745536&text=Hi%21&type=phone_number&app_absent=0">
                  <FaWhatsapp/>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
        placeholder="Search for a vegetable..."
        onChange={handleSearchChange}  
      
      />
              
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button className="btn btn-outline-danger m-2 " type="submit">
            <Link className="outline-none" to="Logoutpage"> Logout</Link>
              </button>
            <span
              style={{ color: "green", fontSize: "25px", marginLeft: "20px" }}
            >
              <FiShoppingCart />
              <sup style={{ color: "red" }}>{count}</sup>
            </span>
            <span
              style={{
                color: "lightgreen",
                marginRight: "20px",
                fontSize: "25px",
                marginLeft: "20px",
              }}
            >
              <Link to="MyProfile">
                <VscAccount className="text-success" />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Mynavbar;
