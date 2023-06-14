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
        <div className="seis"></div>
        <div className="cinco">0</div>
        <div className="cuatro">0</div>
        <div className="tres">0</div>
        <div className="dos">0</div>
        <div className="uno">1</div>
      </div>
    </div>
  );
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
