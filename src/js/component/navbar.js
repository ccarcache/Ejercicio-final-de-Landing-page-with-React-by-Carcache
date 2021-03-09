import React from "react";
export default function Navbar() {
	return (
		<div className=" ">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a
							className="nav-link active text-white"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link text-secondary "
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
