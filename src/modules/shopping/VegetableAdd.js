import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backendurl } from "../../Servicepage";
import { FaAppleAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Fruitadd.css";

const VegetableAdd = () => {
  const fruitNavigate = useNavigate();

  const [vdata, setdata] = useState({
    vegetablename: "",
    vegetabletitle: "",
    price: "",
    discount: "",
    discribe: "",
    vegetableimage: "",
    quantity: "",
  });

  const fadd = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const vegepage = async () => {
    if (vdata.vegetablename.length >= 3) {
      const { vegetablename, vegetabletitle, price, discount, vegetableimage, discribe, quantity } = vdata;
      
      console.log("Sending data to backend:", { vegetablename, vegetabletitle, price, discount, vegetableimage, discribe, quantity });
      
      try {
        const response = await fetch(`${backendurl}/vegdata`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            vegetablename,
            vegetabletitle,
            price,
            discount,
            vegetableimage,
            discribe,
            quantity,
          }),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Backend response:", result);

        if (result.status === 250) {
          toast.success("Data submitted successfully");
          fruitNavigate("/");
        } else if (result.status === 451) {
          toast.warning("Please ensure all fields are filled correctly.");
        } else {
          toast.error("Failed to submit data.");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        toast.error("An error occurred while submitting the data.");
      }
    } else {
      toast.warning("Vegetable name must be at least 3 characters long.");
    }
  };

  return (
    <div className="fruit-form-container">
      <form>
        <div className="card p-4">
          <div className="header text-center mb-4">
            <FaAppleAlt className="icon" />
            <h2>Add Vegetable</h2>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Vegetable Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Vegetable Name"
                name="vegetablename"
                onChange={fadd}
                value={vdata.vegetablename}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="vegetabletitle"
                onChange={fadd}
                value={vdata.vegetabletitle}
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
                value={vdata.price}
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
                value={vdata.discount}
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
                value={vdata.discribe}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Vegetable Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                name="vegetableimage"
                onChange={fadd}
                value={vdata.vegetableimage}
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
                value={vdata.quantity}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={vegepage}
            >
              Add Vegetable
            </button>
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
};

export default VegetableAdd;
