import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
//import "./index.css";
//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      MaxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating MaxRating={10} size={24} />
    <StarRating color="#ff0049" size={30} className="test" defaultRating={5} />
  </React.StrictMode>
);
