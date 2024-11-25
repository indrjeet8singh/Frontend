import React, { useState, useEffect } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import axios from "axios";
import { backendurl } from "../../Servicepage";
import Carousel from "../../shares/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/Myactions";
import Dreidfruit from "../dreidfruitshop/Dreidfruit";
import "./Productcard.css";


function Myshopping() {
  const [myfruitdata, setFruitData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    axios
      .get(`${backendurl}/allfruits`)
      .then((response) => {
        const dataWithQuantity = response.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setFruitData(dataWithQuantity);
      })
      .catch((error) => {
        console.error("Error fetching fruit data:", error);
      });
  }, []);

  const totalPages = Math.ceil(myfruitdata.length / itemsPerPage);
  const currentItems = myfruitdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //yahan function hai jo quantity increase karega index ke  based par
  const incrementQuantity = (index) => {
    setFruitData((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //  //yahan function hai jo quantity decrease karega index ke  based par
  const decrementQuantity = (index) => {
    setFruitData((prevData) =>
      prevData.map((item, idx) =>
        idx === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container-fluid mt-4">
      <Carousel />
      <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
        <h6>Selected items: {count}</h6>
        <button
          className="btn btn-danger btn-sm d-flex align-items-center"
          onClick={() => dispatch(decrement())}
        >
          <FaTrashCan className="me-2" /> Remove
        </button>
      </div>

      <h2 className="text-center mb-4">Fresh Fruits</h2>
      <hr/>
      <div className="row">
        {currentItems.map((d, index) => {
          const total = d.price * (1 - d.discount / 100);
          const kulprice = total * d.quantity;

          return (
            <div key={d.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card  m-3 shadow-sm product-card">
                <Link to={`${d.fruitimage}`}>
                  <img
                    src={d.fruitimage}
                    alt={d.fruitname}
                    className="card-img-top"
                    // style={{ backgroundImage: "cover", objectFit: "cover" }}
                    style={{
                      height: "200px",
                      width: "200px",
                      marginLeft: "60px",
                    }}
                  />
                </Link>

                <div className="card-body  p-2">
                  <h6 className="card-title small mb-1">{d.fruitname}</h6>
                  <p className="small mb-1 text-muted">
                    ₹{d.price} | {d.discount}% off
                  </p>
                  <p>Total: ₹{kulprice.toFixed(2)}</p>

                  <div className="d-flex align-items-center my-2">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => decrementQuantity(index)}
                      disabled={d.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{d.quantity}</span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => incrementQuantity(index)}
                    >
                      +
                    </button>
                  </div>

                  <div className="d-flex justify-content-between align-baseline">
                    <button
                      onClick={() => dispatch(increment())}
                      className="btn btn-primary btn-sm"
                    >
                      Add To Cart
                    </button>
                    <Link
                      to={`Fruitdetails/` + d._id}
                      className="btn btn-success btn-sm"
                    >
                      BUY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Yahan Pagination Controls hota hai */}
      <div className="pagination-container d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary btn-sm me-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-primary btn-sm ms-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      
      <Dreidfruit/>
      
    </div>
  );
}

export default Myshopping;
