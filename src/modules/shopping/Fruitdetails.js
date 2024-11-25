import React, { useState, useEffect } from "react";
import axios from "axios";
import "animate.css";
import { Link, useParams } from "react-router-dom";
import { backendurl } from "../../Servicepage";
import { ImCancelCircle } from "react-icons/im";

function Fruitdetails() {
  const [fdata, setFdata] = useState([]);
  const { id } = useParams();

  const mysingleFruit = () => {
    axios.get(`${backendurl}/singlefruit/${id}`).then((d) => {
      console.log(d.data);
      setFdata(d.data);
    });
  };
  useEffect(() => {
    mysingleFruit();
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="row mt-5 shadow rounded-3 animate__animated animate__bounceIn">
            <span
              className="  d-grid justify-content-md-end"
              style={{ height: "25px" }}
            >
              <Link
                className="  text-dark text-decoration-none"
                style={{ marginLeft: "101%" }}
                to="/dashboard"
              >
                <ImCancelCircle className="crossback" />
              </Link>
            </span>
            <div className="col-12 col-md-5 mt-4">
              <img
                src={fdata.fruitimage}
                className="img-fluid rounded"
                alt={fdata.fruitname}
              />
            </div>
            <div className="col-12 col-md-7 mt-4 ">
              <h5 className="card-title text-info">{fdata.fruitname}</h5>
              <p className="card-text">Price: {fdata.price}&#8377;</p>
              <p className="card-text">Discount: {fdata.discount}%</p>
              <p className="card-text">Description: {fdata.discribe}</p>
              <p className="card-text">Quantity: {fdata.quantity}</p>

              <div class="d-grid gap-2 col-3 mx-auto">
                <button class="btn btn-primary" type="button">
                  <Link
                    to="/dashboard/Userloginpage"
                    className="text-decoration-none text-white"
                  >
                    BUY
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruitdetails;
