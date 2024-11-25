
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backendurl } from "../../Servicepage";
import { FaAppleAlt } from "react-icons/fa";
import './Fruitadd.css'; 
import { toast } from "react-toastify";

function Fruitadd() {
  const fruitNavigate = useNavigate();
  
  const [fdata, setdata] = useState({
    fruitname: "",
    fruittitle: "",
    price: "",
    discount: "",
    discribe: "",
    fruitimage: "",
    quantity: "",
  });

  const fadd = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fruitpage = async () => {
    if (fdata.fruitname.length >= 3) {
      const {
        fruitname,
        fruittitle,
        price,
        discount,
        fruitimage,
        discribe,
        quantity,
      } = fdata;
      try {
        const response = await fetch(`${backendurl}/fruitdata`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fruitname,
            fruittitle,
            price,
            discount,
            fruitimage,
            discribe,
            quantity,
          }),
        });
        const result = await response.json();
        console.log(result);

        if (result.status === 250) {
          toast.success("Data submitted successfully");
          fruitNavigate("/");
        } else if (result.status === 451) {
          toast.warning("Please ensure all fields are filled correctly.");
        } else {
          toast.error("Failed to submit data.");
        }
      } catch (error) {
        
        toast.error("An error occurred while submitting the data.");
      }
    } else {
      toast.warning("Fruit name must be at least 3 characters long.");
    }
  };

  return (
    <div className="fruit-form-container">
      <form>
        <div className="card p-4">
          <div className="header text-center mb-4">
            <FaAppleAlt className="icon" />
            <h2>Add Fruit</h2>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Fruit Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Fruit Name"
                name="fruitname"
                onChange={fadd}
                value={fdata.fruitname}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="fruittitle"
                onChange={fadd}
                value={fdata.fruittitle}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="price"
                onChange={fadd}
                value={fdata.price}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Discount</label>
              <input
                type="text"
                className="form-control"
                placeholder="Discount"
                name="discount"
                onChange={fadd}
                value={fdata.discount}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                name="discribe"
                onChange={fadd}
                value={fdata.discribe}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Fruit Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                name="fruitimage"
                onChange={fadd}
                value={fdata.fruitimage}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                name="quantity"
                onChange={fadd}
                value={fdata.quantity}
              />
            </div>
          </div>
          <div className="text-center">
            <Link to='Myshopping'>
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={fruitpage}
            >
              Add Fruit
            </button>
            </Link>
            <button type="reset" className="btn btn-danger me-2">
              Cancel
            </button>
            <Link
              to="/"
              className="btn btn-primary"
              style={{ color: "white", textDecoration: "none" }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Fruitadd;
