//Import react and propTypes
import React from "react";
import PropTypes from "prop-types";
//Import Icons
import { BsClockHistory } from "react-icons/bs";

const Counter = props => {
	return (
		<div>
			<div className="container">
				<div className="row rounded m-2 py-3 bg-secondary d-flex justify-content-center">
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						<BsClockHistory />
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 pb-1 bg-info">
						{props.numFour}
					</div>
					<div className="col-1  rounded text-center fs-1 mx-2 bg-info">
						{props.numThree}
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						{props.numTwo}
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						{props.numOne}
					</div>
				</div>
			</div>
			<div className="container">
				<button
					type="button"
					className="btn btn-success btn-lg m-2"
					onClick={timeCycle}>
					Start
				</button>
				<button type="button" className="btn btn-danger btn-lg m-2 ">
					Stop
				</button>
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
// Declaring one variable per digit and increments count every second (1000 miliseconds)
function timeCycle() {
	setInterval(() => {
		let four = Math.floor(count / 1000);
		let three = Math.floor(count / 100);
		let two = Math.floor(count / 10);
		let one = Math.floor(count / 1);
		console.log(four, three, two, one);
		count++;
		<Counter numOne={one} numTwo={two} numThree={three} numFour={four} />;
	}, 1000);
}

export default Counter;
