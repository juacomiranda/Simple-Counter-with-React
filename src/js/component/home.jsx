import React from "react";
import SimpleCounter from "./seconscounter";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

var counter = 0;

setInterval( ()=>{counter++}, 1000);

const Home = () => {
	return (
		<>
			<SimpleCounter seconds={counter}/>
		</>
	);
};

export default Home;
