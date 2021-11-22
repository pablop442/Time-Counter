//Import react
import React from "react";

const Counter = props => {
	return (
		<div>
			<div className="container">
				<div className="row rounded m-2 py-3 bg-secondary d-flex justify-content-center">
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						0
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						0
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						0
					</div>
					<div className="col-1  rounded text-center fs-1 mx-2 bg-info">
						0
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						0
					</div>
					<div className="col-1 rounded text-center fs-1 mx-2 bg-info">
						0
					</div>
				</div>
			</div>
		</div>
	);
};

// let timer = setInterval(countTime(), 1000);
// let seconds = 0;
// const countTime = () => {
// 	seconds++;
// 	//each hour has 3600 seconds.
// 	let hour = Math.floor(seconds / 3600);
// 	let minute = Math.floor((seconds - hour * 3600) / 60);
// 	let second = seconds - (hour * 3600 + minute * 60);
// };

export default Counter;
