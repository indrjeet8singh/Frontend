import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { backendurl } from "../../Servicepage";
import "animate.css";
import { IoPrintSharp } from "react-icons/io5";

function Userstatuspage() {


//print details here logic create
const componentRef = useRef();

const handlePrint = () => {
    const content = componentRef.current;
  
    const printWindow = window.open("", "", "height=600,width=800");
  
    // Add styles for printing page
    printWindow.document.write(`
      <html>
        <head>
          <title>INDRA</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            img {
              max-width: 100px;
              height: auto;
              border-radius: 8px;
            }
            .no-print {
              display: none;
            }
          </style>
        </head>
        <body>
          ${content.innerHTML}
        </body>
      </html>
    `);
  
    printWindow.document.close();
    printWindow.print();
  };




  const [selectUser, setSelectUser] = useState([]);
  const [userData, setuserData] = useState([]);
  
  
  useEffect(() => {
    axios
      .get(`${backendurl}/allusers`)
      .then((response) => {
        setuserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  
  const handleChange = (e, index) => {
    const newUser = [...selectUser];
    newUser[index] = e.target.value;
    setSelectUser(newUser);
  };

  
  const getStatusForCompany = (user) => {
    switch (user) {
      case "Nokia":
        return <h4 className="animate__infinite animate__animated animate__flash animate__slower" style={{ color: 'greenyellow' }}>Pending</h4>;
      case "HCL":
        return <h4 className="animate__infinite animate__animated animate__flash animate__slower" style={{ color: 'red' }}>Inactive</h4>;
      case "TECH MAHENDRA":
        return <h4 className="animate__infinite animate__animated animate__flash animate__slower" style={{ color: "green" }}>Active</h4>;
      default:
        return "";
    }
  };

  return (
    <div className="container landcol">
      <div className="row">
        <div className="col-sm-12 mt-4">
          <h1> Total Users Data {userData.length}<IoPrintSharp
      onClick={handlePrint}
      className="print-icon"
      size={24} // Icon size hai
    /> </h1>
          
          <table className="table table-bordered border-primary" ref={componentRef} >
            <thead>
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Name</th>
                <th scope="col" width="200">Company Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((d, index) => (
                <tr key={d._id}>
                  <th scope="row">{d._id}</th>
                  <td>{d.fullname}</td>
                  <td>
                    <select
                      className="form-select"
                      value={selectUser[index] || ''}
                      onChange={(e) => handleChange(e, index)}
                    >
                      <option value="">Select Company</option>
                      <option value="Nokia">Nokia</option>
                      <option value="HCL">HCL</option>
                      <option value="TECH MAHENDRA">TECH MAHENDRA</option>
                    </select>
                  </td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>{getStatusForCompany(selectUser[index])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Userstatuspage;
