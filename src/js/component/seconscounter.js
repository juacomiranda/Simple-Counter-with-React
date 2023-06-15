import React from  'react';


function SimpleCounter(props) {
    return (
      <div className="container-fluid">
        <div className="big-counter">
          <div className="reloj">
            <i className="far fa-clock"> </i>
          </div>
          <div className="seis">0</div>
          <div className="cinco">0</div>
          <div className="cuatro">0</div>
          <div className="tres">0</div>
          <div className="dos">0</div>
          <div className="uno">0</div>
        </div>
      </div>
    );
  }

  export default SimpleCounter;