import React, { useRef } from 'react';

const PrintDetails = () => {
  const componentRef = useRef();

  // Function to handle the print
  const handlePrint = () => {
    const content = componentRef.current;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(content.innerHTML); // Use innerHTML to pass the content to the print window
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div>
      {/* Content to print */}
      <div ref={componentRef}>
        <h1>Hello, PDF!</h1>
        <p>This content will be printed as a PDF.</p>
      </div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PrintDetails;
