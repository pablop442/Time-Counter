//Import React and proptypes
import React from "react";
import ReactDOM from "react-dom";

//Import Bootstrap and scss
import "bootstrap";
import "../styles/index.scss";

// Import components
import Counter from "./component/counter.jsx";

//Initialize variable count at 0
let count = 0;

//The setInterval function increases the count every second and renders it.

setInterval(() => {
	ReactDOM.render(<Counter count={count} />, document.querySelector("#app"));
	count++;
}, 1000);
