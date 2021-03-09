import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) {
	return (
		<div className="card-footer text-center text-white bg-dark">
			{props.text}
		</div>
	);
}

Footer.propTypes = {
	// Puedes declarar que una propiedad es un tipo específico de JS. Por defecto, estas
	// son todas opcionales.
	text: PropTypes.string
};
