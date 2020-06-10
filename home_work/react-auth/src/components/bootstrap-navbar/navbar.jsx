import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import "./navbar.scss";

class BootstrapNavbar extends Component {
    signOut = () => {
        authService.logout();
    };

    isLoggedIn = () => {
        const response = authService.getCurrentUser();
        console.log(response);
        
        return response;
    };

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark ">
                <Link to="/students" className="nav-link">
                    Home
                </Link>
                {!this.isLoggedIn() ? (
                    <Fragment>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                        <Link to="/register" className="nav-link">
                            Register
                        </Link>
                    </Fragment>
                ) : null}

                {this.isLoggedIn() ? (
                   <Fragment>
                       <Link  to="#" className="nav-link disabled" >
                            Add Student
                        </Link>
                        <a
                        className="nav-link"
                        style={{ color: "white" }}
                        onClick={this.signOut}
                    >
                        Logout
                    </a>
                   </Fragment>
                ) : null}
            </nav>
        );
    }
}

export default BootstrapNavbar;
