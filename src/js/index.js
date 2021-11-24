//Import React and proptypes
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//Import Bootstrap and scss
import "bootstrap";
import "../styles/index.scss";
import { BsClockHistory } from "react-icons/bs";

//import your own components
// import Home from "./component/home.jsx";

//Component
const Counter = props => {
	//Using de mod operator allows to return only the last two numbers of count
	return (
		<div>
			<div className="container">
				<div className="row rounded shadow m-2 py-3 bg-primary d-flex justify-content-center">
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						<BsClockHistory />
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 pb-2 bg-info">
						{props.numFour % 10}
					</div>
					<div className="col-1  rounded text-center fs-1 mx-2 bg-info">
						{props.numThree % 10}
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						{props.numTwo % 10}
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						{props.numOne % 10}
					</div>
				</div>
			</div>
			<div className="container">
				{/* <button
					type="button"
					className="btn btn-success btn-lg m-2"
					onClick={timeCycle}>
					Start
				</button>
				<button type="button" className="btn btn-danger btn-lg m-2 ">
					Stop
				</button> */}
			</div>
		</div>
	);
};

// Setting propTypes
Counter.propTypes = {
	numOne: PropTypes.number,
	numTwo: PropTypes.number,
	numThree: PropTypes.number,
	numFour: PropTypes.number
};

//Set count variable to zero to change it on each interval
let count = 0;
// Declaring one variable per digit and incrementing count every second (1000 miliseconds)

setInterval(() => {
	let four = Math.floor(count / 1000);
	let three = Math.floor(count / 100);
	let two = Math.floor(count / 10);
	let one = Math.floor(count / 1);
	console.log(four, three, two, one);
	count++;
	//With each interval count gets rendered into app
	ReactDOM.render(
		<Counter numOne={one} numTwo={two} numThree={three} numFour={four} />,
		document.querySelector("#app")
	);
}, 1000);
