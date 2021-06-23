import React, { Component } from "react";
import "./bootstrapNav.scss";
import { Link } from "react-router-dom";
class BootstrapNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark ">
                <a className="nav-link">the lightsaber database</a>
                <Link to="/new" className="nav-link">
                    add character
                </Link>
                <Link to="/sabers" className="nav-link">
                    all character
                </Link>
            </nav>
        );
    }
}

export default BootstrapNav;
