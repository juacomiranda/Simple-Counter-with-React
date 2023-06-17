import React from  'react';


const SimpleCounter = (props) => {
    let uni = props.seconds%10;
    let dec = Math.floor((props.seconds/10))%10;
    let cen = Math.floor(props.seconds/100)%10;
    let mil = Math.floor(props.seconds/1000)%10;
    let dmil = Math.floor(props.seconds/10000)%10;
    return (
      <div className="container-fluid">
        <div className="big-counter">
          <div className="reloj">
            <i className="far fa-clock"> </i>
          </div>
          <div className="cuatro">{dmil}</div>
          <div className="cuatro">{mil}</div>
          <div className="tres">{cen}</div>
          <div className="dos">{dec}</div>
          <div className="uno">{uni}</div>
        </div>
      </div>
    );
  }

  

  export default SimpleCounter;