import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/hoc">
                                High Order Components
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counteregular">
                                Regular Counter
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counterhook">
                                Hooks Counter
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/context">
                                Context
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
