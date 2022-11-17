import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand">Vidly</a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className={"nav-link"} to={"/hocmovies"}>
								hoc
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className={"nav-link"} to={"/class-vs-hooks"}>
								class vs hooks
							</NavLink>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Rental</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
