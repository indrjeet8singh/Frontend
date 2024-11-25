import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendurl } from "../../Servicepage";
import { toast } from "react-toastify";
import Carousel from "../../shares/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/Myactions";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Productcard.css";
import "animate.css";


function ProductCard({ searchTerm }) {
  const [vegetableData, setVegetableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  // Fetch vegetable data on component mount
  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const response = await axios.get(`${backendurl}/allvegetable`);
        const dataWithQuantity = response.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setVegetableData(dataWithQuantity);
      } catch (error) {
        toast.error("Error fetching vegetable data.");
        console.error("Error fetching vegetable data:", error);
      }
    };
    fetchVegetables();
  }, []);

  // Filter data based on the search term
  const filteredData = vegetableData.filter((vegetable) => {
    const vegetableName = vegetable.vegetablename || "";
    return vegetableName.toLowerCase().includes(searchTerm?.toLowerCase() || "");
  });

  // Here Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  // Increment and decrement quantity logic
  const incrementQuantity = (index) => {
    setVegetableData((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (index) => {
    setVegetableData((prevData) =>
      prevData.map((item, idx) =>
        idx === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container mt-4">
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

      <div className="vegetable-list-container">
        <h5 className="mb-4">Vegetable List</h5>
        {paginatedData.length > 0 ? (
          <div className="row">
            {paginatedData.map((vegetable, index) => {
              const discountedPrice = vegetable.price * (1 - vegetable.discount / 100);
              const totalPrice = discountedPrice * vegetable.quantity;

              return (
                <div key={vegetable.id} className="col-md-3 mb-3">
                  <div
                    className="card h-auto w-auto product-card  shadow-sm d-flex justify-content-evenly align-content-center"
                    style={{ width: "13rem", height: "16rem" }}
                  >
                    <img
                      src={vegetable.vegetableimage}
                      alt={vegetable.vegetablename}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body p-2">
                      <h6 className="card-title small mb-1">{vegetable.vegetablename}</h6>
                      <p className="small mb-1 text-muted">
                       <strike>₹{vegetable.price}</strike> | {vegetable.discount}% off
                      </p>
                      <div className="d-flex align-items-center my-2">
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => decrementQuantity(index)}
                          disabled={vegetable.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{vegetable.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm ms-2"
                          onClick={() => incrementQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                      <p className="small mb-1">Total: ₹{totalPrice.toFixed(2)}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          onClick={() => dispatch(increment())}
                          className="btn btn-primary btn-sm"
                        >
                          Add To Cart
                        </button>
                        <Link to="#" className="btn btn-success btn-sm">
                          BUY
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No vegetable data available.</p>
        )}
      </div>

      {/* Pagination Controls */}
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
    </div>
  );
}

export default ProductCard;
