import React,{useEffect, useState} from "react";

import { BarChart, Bar, XAxis,  Tooltip} from "recharts";
import { backendurl } from "../../Servicepage";
import axios from "axios";



function Graphanual() {
  const[myfruitdata,setdata]=useState([])

  const myalldata = () => {
      axios.get(`${backendurl}/allfruits`).then((d) => {
          
          setdata(d.data)
        
      })
  }
  useEffect(() => {
      myalldata();
  }, []);


  return (
    <div className="bg-white mt-5">
      <BarChart
                        width={1000}
                        height={400}
                        data={myfruitdata}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="fruitname" />
                        {/* <YAxis /> */}
                        <Tooltip shared={true} trigger="mouseover" />
                        {/* <Legend /> */}
                        <Bar dataKey="price.length" fill="blue" />
                        <Bar dataKey="discount.length" fill="red" />  
                        
                    </BarChart>
      <p style={{ textAlign: "center", color: "greenyellow" }}>
        <b>last seven years data comparison</b>
      </p>
    </div>
  );
};

export default Graphanual;

