
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backendurl } from "../../Servicepage";
// import { FaAlmondAlt } from "react-icons/fa";
import { GiAlmond } from "react-icons/gi";

import './Fruitadd.css'; 
import { toast } from "react-toastify";

function Driedfruitadd() {
  const fruitNavigate = useNavigate();
  
  const [dfdata, setdfdata] = useState({
    dfruitname: "",
    dfruittitle: "",
    dprice: "",
    drieddiscount: "",
    drieddiscribe: "",
    dfruitimage: "",
    dquantity: "",
  });

  const dfadd = (e) => {
    const { name, value } = e.target;
    setdfdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const driedfruit = async () => {
    if (dfdata.dfruitname.length >= 3) {
      const {
        dfruitname,
        dfruittitle,
        dprice,
        drieddiscount,
        dfruitimage,
        drieddiscribe,
        dquantity,
      } = dfdata;
      try {
        const response = await fetch(`${backendurl}/dfruitdata`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dfruitname,
            dfruittitle,
            dprice,
            drieddiscount,
            dfruitimage,
            drieddiscribe,
            dquantity,
          }),
        });
        const result = await response.json();
        console.log(result);

        if (result.status === 250) {
          toast.success("Data submitted successfully");
          fruitNavigate("/dashboard");
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
            <GiAlmond className="icon" />
            <h2>Add Fruit</h2>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Fruit Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Fruit Name"
                name="dfruitname"
                onChange={dfadd}
                value={dfdata.dfruitname}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="dfruittitle"
                onChange={dfadd}
                value={dfdata.dfruittitle}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="dprice"
                onChange={dfadd}
                value={dfdata.dprice}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Discount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Discount"
                name="drieddiscount"
                onChange={dfadd}
                value={dfdata.drieddiscount}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                name="drieddiscribe"
                onChange={dfadd}
                value={dfdata.drieddiscribe}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Fruit Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                name="dfruitimage"
                onChange={dfadd}
                value={dfdata.dfruitimage}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                name="dquantity"
                onChange={dfadd}
                value={dfdata.dquantity}
              />
            </div>
          </div>
          <div className="text-center">
            <Link to='/'>
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={driedfruit}
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

export default Driedfruitadd;
