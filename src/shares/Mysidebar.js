import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";



function Mysidebar() {
  return (
    <div className="flex-shrink-0  p-3 sticky-md-top">
    <Link href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                            
      <span className="fs-5 fw-semibold text-success">Resources</span>
    </Link>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn text-success d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
        <AiOutlineHome/>  Home
        </button>
        <div className="collapse" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="/dashboard" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Home Page</Link></li>
            <li><Link to="Userloginpage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Login</Link></li>
            <li><Link to="Fruitadd" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Fruits Add</Link></li>
            <li><Link to="Users" className="link-body-emphasis d-inline-flex text-decoration-none rounded">All Users</Link></li>
            <li><Link to="Graphanual" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Graphanual</Link></li>
            <li><Link to="Userstatuspage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Userstatuspage</Link></li>
            <li><Link to="redux" className="link-body-emphasis d-inline-flex text-decoration-none rounded">redux</Link></li>
            <li><Link to="Mytexteditor" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Myeditor</Link></li>
           <li><Link to="Alluserlist" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Alluserlist</Link></li>
           <li><Link to="Adminlogin" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Admin</Link></li>

          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn text-success  d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
         <RxDashboard/> Dashboard
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="Adminshoppage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Admin Shop</Link></li>
            <li><Link to="FeedbackList" className="link-body-emphasis d-inline-flex text-decoration-none rounded">FeedbackList</Link></li>
            <li><Link to="ParentComponent" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Map</Link></li>

          
            <li><Link to="VegetableAdd" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Vegetable Add</Link></li>
            <li><Link to="Driedfruitadd" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Dried Fruit Add</Link></li>

            
            <li><Link to="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn text-success d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
         <TbBrandBooking/> Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</Link></li>
            <li><Link href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</Link></li>
            <li><Link to="Receipt" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped And Receipt</Link></li>
            <li><Link to="PrintDetails" className="link-body-emphasis d-inline-flex text-decoration-none rounded">PrintDetails</Link></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      
    </ul>
    
  </div>
  
  )
}

export default Mysidebar