import React from "react";

const Navbar = (props) => {
	const { total } = props;
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Counters: {total}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
