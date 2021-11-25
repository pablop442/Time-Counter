//Import react and propTypes
import React from "react";
import PropTypes from "prop-types";

//Import Icons
import { BsClockHistory } from "react-icons/bs";

const Counter = props => {
	//Sets de value of each second. Mod operator deletes last digit from count.
	return (
		<div>
			<div className="container">
				<div className="row rounded m-2 py-3 bg-secondary d-flex justify-content-center">
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						<BsClockHistory />
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 pb-1 bg-info">
						{Math.floor(props.count / 1000) % 10}
					</div>
					<div className="col-1  rounded text-center fs-1 mx-2 bg-info">
						{Math.floor(props.count / 100) % 10}
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						{Math.floor(props.count / 10) % 10}
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						{Math.floor(props.count) % 10}
					</div>
				</div>
			</div>
		</div>
	);
};

//Proptype declaration
Counter.propTypes = {
	count: PropTypes.number
};

//Export component
export default Counter;
