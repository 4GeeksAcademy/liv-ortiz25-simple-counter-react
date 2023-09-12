//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'; 

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
	return(
		<div className="container">
			<div className="icon"><i className="far fa-clock"></i></div>
			<div clasName="six">{props.digitSix % 10}</div>
			<div clasName="five">{props.digitFive % 10}</div>
			<div clasName="four">{props.digitFour % 10}</div>
			<div clasName="three">{props.digitThree % 10}</div>
			<div clasName="two">{props.digitTwo % 10}</div>
			<div clasName="one">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};


let counter = 0;
setInterval(function () {
	const six = Math.floor(counter/100000);
	const five = Math.floor(counter/10000);
	const four = Math.floor(counter/1000);
	const three = Math.floor(counter/100);
	const two = Math.floor(counter/10);
	const one = Math.floor(counter/1);
	console.log(four, three, two, one);
	counter++;

ReactDOM.render(
		<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, 
		document.querySelector("#app")
);

}, 1000);