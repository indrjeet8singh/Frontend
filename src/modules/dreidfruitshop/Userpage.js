import React, { useState, useEffect } from "react";
import axios from "axios";

import { backendurl } from "../../Servicepage";

function Userpage() {
  const [sdata, setdatas] = useState([]);
  

  const singleuser = () => {
    axios.get(`${backendurl}/validuser`).then((d) => {
      console.log(d.data);
      setdatas(d.data);
    });
  };
  useEffect(() => {
    singleuser();
  }, );

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-5 p-3">
          <div className="container-fluid rounded border p-5 bg-light shadow mt-5">
            <div className="row">
              <div className="col-12 mt-4 position-relative top-50 start-50 translate-middle  rounded-circle">
                <div className="col-5 mt-4 position-relative top-50 start-50 translate-middle">
                  <img
                    src={sdata.profile}
                    className="card-img-center rounded-circle"
                    alt={sdata._id}
                    style={{ height: "120px", width: "120px" }}
                  />
                </div>
              </div>
              <div className="col-12 p-2 mt-2">
              <h5 class="card-title text-info">{sdata._id}</h5>

                <h5 class="card-title text-info">{sdata.fullname}</h5>
              </div>
              <div className="col-12 p-2 mt-2">
                <h5 class="card-title">Phone:{sdata.phone}</h5>
              </div>
              <div className="col-12 p-2 mt-2">
                <h5 class="card-title">Email:{sdata.email}</h5>
              </div>
              <div className="col-12 p-2 mt-2">
                <h5 class="card-title">Gender:{sdata.gender}</h5>
              </div>
              <div className="col-12 p-2 mt-2">
                <h5 class="card-title">State:{sdata.state}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpage;
