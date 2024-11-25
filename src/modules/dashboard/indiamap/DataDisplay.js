
import React, { useRef } from "react";
import { IoPrintSharp } from "react-icons/io5";


const DataDisplay = ({ myData, selectedState }) => {
//print details here logic create
const componentRef = useRef();

const handlePrint = () => {
    const content = componentRef.current;
  
    const printWindow = window.open("", "", "height=600,width=800");
  
    // Add styles for printing
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
  




  // Check if the selected state matches the state data
  if (selectedState) {
    const selectedStateData = myData.find((data) => data.state === selectedState.name);

    if (selectedStateData) {
      return (
        <div className="datadisplay" style={{ marginTop: "20px" }}>
         <div className="d-flex align-content-center justify-content-evenly">
          <h5 className="card-title">State Details</h5>
          <IoPrintSharp
      onClick={handlePrint}
      className="print-icon"
      size={24} // Icon size
    />
          <h5 className="card-title">Total Users: {myData.length}</h5>
          

          </div>
    <div ref={componentRef} className="align-content-center">
          <table border="1 mt-2" style={{ borderCollapse: "collapse"}} >
            <thead>
              <tr>
                <th style={{ padding: "8px" }}>Property</th>
                <th style={{ padding: "8px" }}>Value</th>
                <th><img  className="w-25 rounded-4" src={selectedStateData.profile} alt="user img"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px" }}>State</td>
                <td style={{ padding: "8px" }}>{selectedState.name}</td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>State Value</td>
                <td style={{ padding: "8px" }}>{selectedState.value}</td>
              </tr>
              </tbody>
              

              
                    <tfoot>
                    <tr>
                     <td style={{ padding: "8px" }}>Name</td>
                     <td style={{ padding: "8px" }}>{selectedStateData.fullname}</td>
                     </tr>
                     
              <tr>
              <td style={{ padding: "8px" }}>Email</td>
              <td style={{ padding: "8px" }}>{selectedStateData.email}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>Phone</td>
              <td style={{ padding: "8px" }}>{selectedStateData.phone}</td>
            </tr>
            </tfoot>
                
               
              
            
          </table>
          </div>
        </div>
      );
    }
  }

  // In case there's no selected state
  return (
    <div>
      <h2>Selected State Data </h2>
      <div ref={componentRef}>
      <IoPrintSharp
      onClick={handlePrint}
      className="print-icon"
      size={24} // Icon size
    />
      {selectedState ? (
        <table  border="1" style={{ borderCollapse: "collapse", width: "400px" }}>
            <tr>
            <th style={{ padding: "8px" }}>State</th>
            <th style={{ padding: "8px" }}>SN.</th>
            </tr>
            <tr>
            <td style={{ padding: "8px" }}>{selectedState.name}</td>
            <td style={{ padding: "8px" }}>{selectedState.value}</td> 
            </tr>
        </table>
        
      ) : (
        <p>No state selected. Click a state on the map to see details.</p>
      )}
      </div>
    </div>
  );
};

export default DataDisplay;
