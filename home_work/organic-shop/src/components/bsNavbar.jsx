import React, { Component } from "react";
import { Link } from "react-router-dom";

class BootstrapNavbar extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState((currentValue) => ({
            isOpen: !currentValue.isOpen,
        }));
    };

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/home">
                        O
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/shopping-cart">
                                    Shopping Cart
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={this.toggle}
                                >
                                    Username
                                </a>
                                <div
                                    className={
                                        isOpen
                                            ? "dropdown-menu show"
                                            : "dropdown-menu"
                                    }
                                    aria-labelledby="navbarDropdown"
                                >
                                    <Link to='/my/orders' className="dropdown-item">
                                        My Orders
                                    </Link>
                                    <Link to='/admin/orders' className="dropdown-item">
                                        Manage Orders
                                    </Link>
                                    <Link to='/admin/products' className="dropdown-item">
                                        Manage Products
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item">
                                        Log Out
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default BootstrapNavbar;
