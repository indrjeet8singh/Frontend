import React, { useState, useEffect } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import axios from "axios";
import { backendurl } from "../../Servicepage";
import Carousel from "../../shares/Carousel";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

function Adminshoppage() {
  const [myfruitdata, setFruitData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${backendurl}/allfruits`)
      .then((response) => {
        setFruitData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fruit data:", error);
      });
  }, []);

  const incrementCount = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const mydeletefruit = (id) => {
    const result = window.confirm("Do you want to delete ?");
    if (result) {
      axios
        .delete(`${backendurl}/deletefruit/${id}`)
        .then((response) => {
          setFruitData(myfruitdata.filter((fruit) => fruit._id !== id));
          toast.success("Deleted Your Item Successfully!");
        })
        .catch((error) => {
          console.error("Error deleting fruit:", error);
          toast.error("Error deleting your item. Please try again.");
        });
    } else {
      toast.warning("Not deleted your item.");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <Carousel />
        <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
          <h3>Selected items: {count}</h3>
          <button
            className="btn btn-danger d-flex align-items-center"
            onClick={decrement}
          >
            <FaTrashCan className="me-2" /> Remove
          </button>
        </div>

        <div className="">
          <div className="row">
            {myfruitdata.map((d) => (
              <div key={d._id} className="col-md-4 mb-4">
                <div className="card h-100 shadow cardimg">
                  <span
                    style={{ width: "20px" }}
                    className="fs-3 text-danger"
                    onClick={() => mydeletefruit(d._id)}
                  >
                    <MdDelete />
                  </span>

                  <Link to={`${d.fruitimage}`}>
                    <img
                      src={d.fruitimage}
                      alt={d.fruitname}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        width: "200px",
                        marginLeft: "60px",
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{d.fruitname}</h5>
                    <p className="card-text">
                      <strong>Original Price:</strong> &#8377;{d.price}
                      <br />
                      <strong style={{ color: "red" }}>Discount:</strong>{" "}
                      {d.discount}
                    </p>
                    <div className="d-flex justify-content-evenly align-content-center">
                      <button
                        onClick={incrementCount}
                        className="btn"
                      >
                        <Link                         className="btn btn-info text-white d-flex align-content-center justify-content-center "
                      >
                          <AiOutlineShoppingCart className="" />
                          </Link>
                      </button>
                      
<button className="btn">
                      <Link
                        to={`/dashboard/Fruitdetails/${d._id}`}
                        className="btn btn-success text-white d-flex align-content-center justify-content-center "
                      >

                       BUY
                      </Link>
                      </button>
                      <button className="btn ">

                      <Link
                        to={`/dashboard/fruitedit/${d._id}`}
                        className="btn btn-warning text-white d-flex align-content-center justify-content-center "
                      >
                        <FiEdit /> 
                      </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminshoppage;
