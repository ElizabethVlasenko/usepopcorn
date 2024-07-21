import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
//import "./index.css";
//import App from "./App";
function Test() {
  const [movieRating, setMovieState] = useState(0);

  function setMovieRating(rating) {
    setMovieState(rating);
  }
  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating}></StarRating>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      MaxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test></Test>
  </React.StrictMode>
);
