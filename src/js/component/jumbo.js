import React from "react";

export default function Jumbo() {
	return (
		<div className="container">
			<div className="jumbotron ">
				<h1 className="display-4 p-3 mt-0 pt-0">A Warm Welcome!</h1>
				<p className="lead ">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Asperiores dolor molestias ut deleniti atque veniam non
					explicabo libero nesciunt, quam fugiat temporibus obcaecati
					vitae itaque corrupti consectetur ratione velit commodi?
				</p>
				<div className="container pl-3 ">
					<button
						type="button"
						className="btn btn-primary "
						data-toggle="button"
						aria-pressed="false"
						autoComplete="off">
						Call to action!
					</button>
				</div>
			</div>
		</div>
	);
}
