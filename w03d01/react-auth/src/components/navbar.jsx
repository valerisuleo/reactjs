import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as authService from "../service/authService";

class Navbar extends Component {
    state = {};

    componentDidMount() {
        const message = localStorage.getItem("message");
        const jwt = localStorage.getItem("jwt");

        if (jwt) {
            const username = this.getUsername(message);
            this.setState({ username });
        }
    }

    getUsername(string) {
        const mystr = [string];
        return mystr.map((item) => {
            return item.slice(13).toUpperCase();
        });
    }

    clearStorage() {
        authService.logout();
    }

    render() {
        const { username } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/movies">
                    React Auth
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        {!username ? (
                            <React.Fragment>
                                <Link className="nav-item nav-link" to="/login">
                                    Login
                                </Link>
                                <Link
                                    className="nav-item nav-link"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <a className="nav-item nav-link">{username}</a>
                                <a className="nav-item nav-link" onClick={this.clearStorage}>Logout</a>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
