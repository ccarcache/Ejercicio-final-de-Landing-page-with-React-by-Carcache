import React from "react";
import Navbar from "./component/navbar.js";
import Jumbo from "./component/jumbo.js";
import Card from "./component/card.js";
import Footer from "./component/footer.js";
import PropTypes from "prop-types";
//create your first component
export function App() {
	return (
		<div className="">
			<Navbar />
			<Jumbo />
			<Card />
			<Footer text="Copyright@Your Website 2021" />
		</div>
	);
}
