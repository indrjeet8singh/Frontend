
// import "../shopping/Productcard.css";
// import React, { useState, useEffect } from "react";
// import "animate.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { backendurl } from "../../Servicepage";
// import { useDispatch } from "react-redux";
// import { increment } from "../shopping/reducers/Myactions";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; // Import Slick styles
// import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme styles


// function Dreidfruit() {
//   const [loading, setLoading] = useState(true);
//   const [mydfruitdata, setFruitDatad] = useState([]);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios.get(`${backendurl}/dallfruits`)
//       .then(response => {
//         setFruitDatad(response.data.map(item => ({ ...item, dquantity: 1 })));
//       })
//       .catch(error => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   const incrementQuantity = (index) => {
//     setFruitDatad((prevData) =>
//       prevData.map((item, idx) =>
//         idx === index ? { ...item, dquantity: item.dquantity + 1 } : item
//       )
//     );
//   };

//   const decrementQuantity = (index) => {
//     setFruitDatad((prevData) =>
//       prevData.map((item, idx) =>
//         idx === index && item.dquantity > 1
//           ? { ...item, dquantity: item.dquantity - 1 }
//           : item
//       )
//     );
//   };

//   const settings = {
//     dots: true,              
//     infinite: true,          
//     speed: 500,              
//     slidesToShow: 1,         
//     slidesToScroll: 1,       
//     autoplay: true,          
//     autoplaySpeed: 3000,     
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,  
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 4,  // Show 1 slide on small screens
//           slidesToScroll: 4,
//         },
//       },
//     ],
//   };



//   return (
//     <Slider {...settings} className="carousel">
//     <div className="container mt-4">
//       <div className="row">
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           mydfruitdata.map((d, index) => {
//             const discountedPrice = d.dprice * (1 - d.drieddiscount / 100);
//             const totalPrice = discountedPrice * d.dquantity;

//             return (
//               <div key={d.id} className="col-md-4 mb-4">
//                 <div className="card h-100 shadow m-auto cardimg">
//                   <Link to={`${d.dfruitimage}`}>
//                     <img
//                       src={d.dfruitimage}
//                       alt={d.dfruitname}
//                       className="card-img-top"
//                       style={{
//                         height: "200px",
//                         width: "200px",
//                         marginLeft: "100px",
//                       }}
//                     />
//                   </Link>
//                   <div className="card-body">
//                     <h5 className="card-title">{d.dfruitname}</h5>
//                     <p className="card-text">
//                       <span>
//                         <strike>₹{d.dprice}</strike> | {d.drieddiscount}% off
//                       </span>
//                       <br />
//                       <strong>Total: ₹</strong>{totalPrice.toFixed(2)}
//                     </p>
//                     <div className="d-flex align-items-center my-2">
//                       <button
//                         className="btn btn-outline-secondary btn-sm me-2"
//                         onClick={() => decrementQuantity(index)}
//                         disabled={d.dquantity <= 1}
//                       >
//                         -
//                       </button>
//                       <span>{d.dquantity}</span>
//                       <button
//                         className="btn btn-outline-secondary btn-sm ms-2"
//                         onClick={() => incrementQuantity(index)}
//                       >
//                         +
//                       </button>
//                     </div>
//                     <div className="d-flex justify-content-between">
//                       <button
//                         onClick={() => dispatch(increment())}
//                         className="btn btn-primary"
//                       >
//                         ADD TO CART
//                       </button>
//                       <Link to={`Fruitdetails/${d._id}`} className="btn btn-success">
//                         BUY
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//     </Slider>
//   );
// }

// export default Dreidfruit;
import "../shopping/Productcard.css";
import React, { useState, useEffect } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendurl } from "../../Servicepage";
import { useDispatch } from "react-redux";
import { increment } from "../shopping/reducers/Myactions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Dreidfruit() {
  const [loading, setLoading] = useState(true);
  const [mydfruitdata, setFruitDatad] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${backendurl}/dallfruits`)
      .then((response) => {
        setFruitDatad(response.data.map((item) => ({ ...item, dquantity: 1 })));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const incrementQuantity = (index) => {
    setFruitDatad((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, dquantity: item.dquantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (index) => {
    setFruitDatad((prevData) =>
      prevData.map((item, idx) =>
        idx === index && item.dquantity > 1
          ? { ...item, dquantity: item.dquantity - 1 } : item
      )
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center mb-4">Dried Fruits</h2>
      <hr/>
      
      <Slider {...settings}>
        {mydfruitdata.map((d, index) => {
          const discountedPrice = d.dprice * (1 - d.drieddiscount / 100);
          const totalPrice = discountedPrice * d.dquantity;

          return (
            <div key={d.id} className="p-3">
              <div className="card h-100 shadow cardimg">
                <Link to={`${d.dfruitimage}`}>
                  <img
                    src={d.dfruitimage}
                    alt={d.dfruitname}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{d.dfruitname}</h5>
                  <p className="card-text">
                    <span>
                      <strike>₹{d.dprice}</strike> | {d.drieddiscount}% off
                    </span>
                    <br />
                    <strong>Total: ₹</strong>{totalPrice.toFixed(2)}
                  </p>
                  <div className="d-flex align-items-center my-2">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => decrementQuantity(index)}
                      disabled={d.dquantity <= 1}
                    >
                      -
                    </button>
                    <span>{d.dquantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => incrementQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      onClick={() => dispatch(increment())}
                      className="btn btn-primary"
                    >
                      ADD TO CART
                    </button>
                    <Link to={`Fruitdetails/${d._id}`} className="btn btn-success">
                      BUY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Dreidfruit;
