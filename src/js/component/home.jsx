//Import React and propTypes
import React from "react";
import PropTypes from "prop-types";

//Import components
import Counter from "./counter.jsx";

const Home = props => {
	return (
		<div>
			<Counter count={props.count} />
		</div>
	);
};

//Proptype declaration
Home.propTypes = {
	count: PropTypes.number
};

export default Home;
