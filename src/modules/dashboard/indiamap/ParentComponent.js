

import React, { useState, useEffect } from "react";
import DataDisplay from "./DataDisplay"; // Ensure you import DataDisplay correctly
import IndiaMap from "./IndiaMap";
import axios from "axios";
import { backendurl } from "../../../Servicepage"; // Aapka backend URL

const ParentComponent = () => {
  const [myData, setMyData] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (data) => {
    setSelectedState(data); // When a state is clicked, update selectedState
  };

  // Fetching the data for users once the component mounts
  useEffect(() => {
    axios.get(`${backendurl}/allusers`).then((response) => {
      setMyData(response.data); // Save fetched data in myData state
    });
  }, []);

  return (
    <div className="mt-5 d-flex justify-content-around" >
      
      <div className="d-flex justify-content-evenly">
        <div className="d-flex justify-content-center" style={{ height: "400px", width: "500px" }}>
        <IndiaMap setMyData={setMyData} onStateClick={handleStateClick} />
        </div>
        <div className="d-flex justify-content-center" style={{ height: "500px", width: "400px" }}>
        <DataDisplay myData={myData} selectedState={selectedState} />
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
