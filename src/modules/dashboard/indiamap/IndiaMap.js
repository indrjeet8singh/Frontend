

// import React, { useEffect, useRef } from "react";
// import Highcharts from "highcharts";
// import HighchartsMap from "highcharts/modules/map";
// import axios from "axios";
// import { backendurl } from "../../../Servicepage"; // Aapka backend URL

// HighchartsMap(Highcharts);

// const IndiaMap = ({ setMyData, onStateClick }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const topology = await fetch(
//           "https://code.highcharts.com/mapdata/countries/in/in-all.topo.json"
//         ).then((response) => response.json());

//         const data = [
//           ["in-py", 10],
//           ["in-ld", 11],
//           ["in-wb", 12],
//           ["in-or", 13],
//           ["in-br", 14],
//           ["in-sk", 15],
//           ["in-ct", 16],
//           ["in-tn", 17],
//           ["in-mp", 18],
//           ["in-2984", 19],
//           ["in-ga", 20],
//           ["in-nl", 21],
//           ["in-mn", 22],
//           ["in-ar", 23],
//           ["in-mz", 24],
//           ["in-tr", 25],
//           ["in-3464", 26],
//           ["in-dl", 27],
//           ["in-hr", 28],
//           ["in-ch", 29],
//           ["in-hp", 30],
//           ["in-jk", 31],
//           ["in-kl", 32],
//           ["in-ka", 33],
//           ["in-dn", 34],
//           ["in-mh", 35],
//           ["in-as", 36],
//           ["in-ap", 37],
//           ["in-ml", 38],
//           ["in-pb", 39],
//           ["in-rj", 40],
//           ["in-up", 41],
//           ["in-ut", 42],
//           ["in-jh", 43],
//         ];

//         // Initialize the map chart
//         Highcharts.mapChart(chartRef.current, {
//           chart: {
//             map: topology,
//           },
//           title: {
//             text: "INDRA",
//           },
//           colorAxis: {
//             min: 0,
//           },
//           series: [
//             {
//               data: data,
//               name: "Random data",
//               states: {
//                 hover: {
//                   color: "#BADA55",
//                 },
//               },
//               point: {
//                 events: {
//                   click: function () {
//                     // Notify parent component of the clicked state
//                     if (typeof onStateClick === "function") {
//                       onStateClick({
//                         name: this.name,
//                         value: this.value,
//                       });
//                     }
//                   },
//                 },
//               },
//               dataLabels: {
//                 enabled: true,
//                 format: "{point.name}",
//               },
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching map data:", error);
//       }
//     };

//     // Fetching data for the users
//     myalldata();
//     fetchData();
//   }, );

//   const myalldata = () => {
//     // Fetching data from your backend and passing it to the parent component
//     axios.get(`${backendurl}/allusers`).then((d) => {
//       setMyData(d.data); // Update the parent component state with fetched data
//     });
//   };

//   return <div ref={chartRef}  />;
// };

// export default IndiaMap;


import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import axios from "axios";
import { backendurl } from "../../../Servicepage"; // Your backend URL

HighchartsMap(Highcharts);

const IndiaMap = ({ setMyData, onStateClick }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // To store the Highcharts instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topology = await fetch(
          "https://code.highcharts.com/mapdata/countries/in/in-all.topo.json"
        ).then((response) => response.json());

        const data = [
          ["in-py", 10],
          ["in-ld", 11],
          ["in-wb", 12],
          ["in-or", 13],
          ["in-br", 14],
          ["in-sk", 15],
          ["in-ct", 16],
          ["in-tn", 17],
          ["in-mp", 18],
          ["in-2984", 19],
          ["in-ga", 20],
          ["in-nl", 21],
          ["in-mn", 22],
          ["in-ar", 23],
          ["in-mz", 24],
          ["in-tr", 25],
          ["in-3464", 26],
          ["in-dl", 27],
          ["in-hr", 28],
          ["in-ch", 29],
          ["in-hp", 30],
          ["in-jk", 31],
          ["in-kl", 32],
          ["in-ka", 33],
          ["in-dn", 34],
          ["in-mh", 35],
          ["in-as", 36],
          ["in-ap", 37],
          ["in-ml", 38],
          ["in-pb", 39],
          ["in-rj", 40],
          ["in-up", 41],
          ["in-ut", 42],
          ["in-jh", 43],
        ];

        // Check if the chart is already initialized
        if (!chartInstance.current) {
          chartInstance.current = Highcharts.mapChart(chartRef.current, {
            chart: {
              map: topology,
            },
            title: {
              text: "INDRA",
            },
            colorAxis: {
              min: 0,
            },
            series: [
              {
                data: data,
                name: "Random data",
                states: {
                  hover: {
                    color: "#BADA55",
                  },
                },
                point: {
                  events: {
                    click: function () {
                      // Notify parent component of the clicked state
                      if (typeof onStateClick === "function") {
                        onStateClick({
                          name: this.name,
                          value: this.value,
                        });
                      }
                    },
                  },
                },
                dataLabels: {
                  enabled: true,
                  format: "{point.name}",
                },
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    // Fetching user data
    myalldata();

    // Initialize the map only once
    fetchData();

    // Cleanup to destroy chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const myalldata = () => {
    // Fetch data from your backend and update the parent state
    axios.get(`${backendurl}/allusers`).then((response) => {
      setMyData(response.data);
    });
  };

  return <div ref={chartRef} />;
};

export default IndiaMap;
