
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { backendurl } from "../../Servicepage";
import { toast } from "react-toastify";

function Fruitesedit() {
  const usenav = useNavigate();
  const { id } = useParams();
  const [fruitdata, setfruitData] = useState({
    fruitname: "",
    fruittitle: "",
    price: "",
    discount: "",
    discribe: "",
    fruitimage: "",
    quantity: "",
  });

  const fruitupdateinput = (e) => {
    const { name, value } = e.target;
    setfruitData((a) => ({
      ...a,
      [name]: value,
    }));
  };

  const fruitsingle = async () => {
    try {
      const response = await axios.get(`${backendurl}/updatefruit/${id}`);
      
      setfruitData(response.data);
     
    } catch (error) {
      console.error("Error fetching fruit data:", error);

    }
  };

  useEffect(() => {
    fruitsingle();
  }, );

  const updaterecord = async () => {
    const {
      fruitname,
      fruittitle,
      price,
      discount,
      fruitimage,
      discribe,
      quantity,
    } = fruitdata;
    try {
      const response = await fetch(`${backendurl}/updatefruit/${id}`, {
        method: "PATCH",
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
      usenav("/dashboard");
    } catch (error) {
      console.error("Error updating fruit data:", error);
      toast.error("Not data fatch !!!!!")

    }
  };

  const handleReset = () => {
    setfruitData({
      fruitname: "",
      fruittitle: "",
      price: "",
      discount: "",
      discribe: "",
      fruitimage: "",
      quantity: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updaterecord();
    toast.success("Update Successfully")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-8 p-3">
            <div className="container-fluid border p-5 bg-light shadow">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>Edit Fruits Details</h2>
                </div>
                <div className="col-md-6 p-2 mt-2">
                  <label className="form-label" htmlFor="fruitname">Full Name</label>
                  <input
                    id="fruitname"
                    type="text"
                    className="form-control"
                    placeholder="fruit name"
                    name="fruitname"
                    onChange={fruitupdateinput}
                    value={fruitdata.fruitname}
                    required
                  />
                </div>
                <div className="col-md-6 p-2 mt-2">
                  <label className="form-label" htmlFor="price">Price</label>
                  <input
                    id="price"
                    type="number"
                    className="form-control"
                    placeholder="price"
                    name="price"
                    onChange={fruitupdateinput}
                    value={fruitdata.price}
                    required
                  />
                </div>
                <div className="col-md-6 p-2 mt-2">
                  <label className="form-label" htmlFor="discount">Discount</label>
                  <input
                    id="discount"
                    type="text"
                    className="form-control"
                    placeholder="discount"
                    name="discount"
                    onChange={fruitupdateinput}
                    value={fruitdata.discount}
                    required
                  />
                </div>
                <div className="col-md-6 p-2 mt-2">
                  <label className="form-label" htmlFor="discribe">Describe</label>
                  <input
                    id="discribe"
                    type="text"
                    className="form-control"
                    name="discribe"
                    onChange={fruitupdateinput}
                    value={fruitdata.discribe}
                    required
                  />
                </div>
                <div className="col-md-6 p-2 mt-2">
                  <label className="form-label" htmlFor="quantity">Quantity</label>
                  <input
                    id="quantity"
                    type="text"
                    className="form-control"
                    placeholder="quantity"
                    name="quantity"
                    onChange={fruitupdateinput}
                    value={fruitdata.quantity}
                    required
                  />
                </div>
                <div className="col-md-6 p-2 mt-2">
                  <label className="form-label" htmlFor="fruitimage">Fruit Picture</label>
                  <input
                    id="fruitimage"
                    type="text"
                    className="form-control"
                    placeholder="fruit image URL"
                    name="fruitimage"
                    onChange={fruitupdateinput}
                    value={fruitdata.fruitimage}
                    required
                  />
                </div>
                <div className="col-12 p-2 mt-2 text-center">
                  <input
                    type="submit"
                    value="Update record"
                    className="btn btn-success"
                  />
                  <Link to='/dashboard/Adminshoppage' className="btn ms-3 btn-success">Back</Link>
                  <input
                    type="button"
                    value="Cancel"
                    className="btn btn-danger ms-3"
                    onClick={handleReset}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Fruitesedit;
