import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { backendurl } from "../../Servicepage";

function Myhomepage() {




  
  const [mydata, setdata] = useState([]);

  const columns = [
    { field: "_id", headerName: "sno", width: 10 },
    { field: "fullname", headerName: "FullName", width: 150 },
    { field: "email", headerName: "Email Id", width: 200 },
    { field: "phone", headerName: "Phone No", width: 100 },
    { field: "dob", headerName: "DOB", width: 200 },
    { field: "gender", headerName: "Gender", width: 70 },
    { field: "course", headerName: "Course", width: 50 },
    { field: "profile", headerName: "Profile Pic", width: 70,
          renderCell: (params) => (
      <img
        src={params.value}
        alt="Avatar"
        style={{ width: 50, height: 50, borderRadius: '50%' }}
      />
    ), },
  ];

  const myalldata = () => {
    axios.get(`${backendurl}/allusers`).then((d) => {
      console.log(d.data);
      setdata(d.data);
    });
  };
  useEffect(() => {
    myalldata();
  }, []);
  

  return (
    <Fragment>
      <div className="container-fluid">
    
<div className="container-fluid mb-4 mt-4">
    <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
            <div className="card text-bg-primary shadow-sm border-primary">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Users</h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Total Users: {mydata.length}</h5>
                    <p className="card-text">
                        Here you can find the details of all registered users.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


        <div className="row">
          <div className="col-12">
            {mydata.length <= 0 ? (
              "<p>No data</p>"
            ) : (
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={mydata}
                  columns={columns}
                  getRowId={(mydata) => mydata.name + mydata.phone}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              </div>
            )}
          </div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default Myhomepage;
