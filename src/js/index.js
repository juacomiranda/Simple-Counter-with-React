//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function SimpleCounter(props) {
  return (
    <div className="container-fluid">
      <div className="big-counter">
        <div className="seis box">0</div>
        <div className="cinco box">0</div>
        <div className="cuatro box">0</div>
        <div className="tres box">0</div>
        <div className="dos box">0</div>
        <div className="uno box">0</div>
      </div>
    </div>
  );
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
