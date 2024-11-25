import React, { useRef } from "react";
import PropTypes from "prop-types";
import logoindra from "../../assets/images/logoindra.png"; // Update with your actual logo path

const Receipt = ({
  customerName = "Amazon Customer",
  customerAddress = "Delhi-110032",
  customerEmail = "support@bookkeeperapp.net",
  customerPhone = "9999176746",
  receiptNo = "RCV1",
  date = "13-06-2019",
  subTotal = "1,062.00",
  amount = "1,062.00",
  amountInWords = "INR One Thousand Sixty Two Only",
}) => {
  const receiptRef = useRef();

  const handlePrint = () => {
    const printContents = receiptRef.current.innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background: #f4f2f5;
            }
            .container {
              max-width: 600px;
              margin: auto;
              border: 1px solid #ddd;
              padding: 20px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              background: white;
            }
            .text-center { text-align: center; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
            .d-flex { display: flex; justify-content: space-between; align-items: center; }
            .logo { height: 70px; width: 70px; }
            .fw-bold { font-weight: bold; }
            .bg-light { background-color: #f7f7f7; padding: 10px; }
            @media (max-width: 600px) {
              .container { width: 90%; padding: 10px; }
            }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div>
      <div ref={receiptRef} className="container mt-4 border p-4 shadow-sm">
        <div className="text-center">
          <img style={{height: "70px",width: "70px"}} src={logoindra} alt="Logo" className="logo" />
          
          <div className="d-flex justify-content-evenly">
            <span>Reference No:{receiptNo}</span><h6>Ecommerce</h6><span>Product Type:23456789</span>
          </div>
          <hr />
        </div>

        <div>
          <p><strong>Customer/Debtor:</strong> {customerName}</p>
          <address>
            {customerAddress}<br />
            <a href={`mailto:${customerEmail}`}>{customerEmail}</a><br />
            📞 {customerPhone}
          </address>
        </div>

        <table>
          <tbody>
            <tr><td>Sub Total:</td><td>₹{subTotal}</td></tr>
            <tr><td>Amount:</td><td>₹{amount}</td></tr>
            <tr><td>Amount (in words):</td><td>{amountInWords}</td></tr>
          </tbody>
        </table>

        <div className="d-flex justify-content-between mt-4">
          <p><strong>Receipt No.:</strong> {receiptNo}</p>
          <p><strong>Dated:</strong> {date}</p>
        </div>

        <div className="bg-light mt-4 text-end">
          <p>Authorized Signatory</p>
        </div>
      </div>

      <div className="text-end mt-4">
        <button className="btn btn-primary" onClick={handlePrint}>Print Receipt</button>
      </div>
    </div>
  );
};

Receipt.propTypes = {
  customerName: PropTypes.string,
  customerAddress: PropTypes.string,
  customerEmail: PropTypes.string,
  customerPhone: PropTypes.string,
  receiptNo: PropTypes.string,
  date: PropTypes.string,
  subTotal: PropTypes.string,
  amount: PropTypes.string,
  amountInWords: PropTypes.string,
};

export default Receipt;
