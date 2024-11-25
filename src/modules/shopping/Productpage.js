

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Mynavbar from "../../shares/Mynavbar";

function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* Search Input Component */}
      <Mynavbar setSearchTerm={setSearchTerm} />
      
      {/* ProductCard Component with searchTerm as prop */}
      <ProductCard searchTerm={searchTerm} />
    </div>
  );
}

export default ProductPage;
