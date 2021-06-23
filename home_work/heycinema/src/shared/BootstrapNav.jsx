import React, { Fragment } from "react";
import BootstrapForm from "./reusable-components/BootstrapForm";
import MovieContext from "./movieContext";
import config from "../config.json";
import { Link } from "react-router-dom";
import http from "../services/httpService";
import { withRouter } from "react-router-dom";

class BootstrapNav extends BootstrapForm {
    state = {
        data: { movieTitle: "" },
        isOpen: false,
        errors: {},
    };

    toggleMenu() {
        this.setState((currentState) => ({
            isOpen: !currentState.isOpen,
        }));
    }

    getMenuClasses() {
        const classes = !this.state.isOpen ? "collapse animated fadeInUp" : "show";
        return classes;
    }

    static contextType = MovieContext;

    async doSubmit(payload) {
        let value = payload.movieTitle;
        value = value.toLowerCase();
        value = value.replaceAll(/\s/g, "%20");
        let url = `${config.omdbAPI}/?s=${value}&apikey=${config.keyAPI}`;
        const response = await http.get(url);

        this.setState({
            data: { movieTitle: "" },
        });

        this.context.setMovies(response.data.Search);
        this.props.history.push("/movies");
    }

    resetUI = () => {
        this.context.setMovies([]);
    }

    render() {
        return (
            <Fragment>
                <div className="pos-f-t animated fadeInDown">
                    <div
                        className={this.getMenuClasses()}
                        id="navbarToggleExternalContent"
                    >
                        <div className="bg-dark p-4">
                            <div className="row">
                                <div className="col-4 navbar-brand">
                                    ADVANCED FILTERS COMING SOON
                                </div>
                                <div className="col-4 navbar-brand">
                                    ADVANCED FILTERS COMING SOON
                                </div>
                                <div className="col-4 navbar-brand">
                                    ADVANCED FILTERS COMING SOON
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark">
                        <div>
                            <Link onClick={this.resetUI} to="/movies" className="navbar-brand mr-5">
                                IMDb
                            </Link>{" "}
                            <button
                                onClick={() => this.toggleMenu()}
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand ml-2">Menu</a>
                        </div>

                        <form
                            onSubmit={this.handleSubmit}
                            className="form-inline"
                        >
                            {this.renderInput("", "movieTitle", "Find your movie!")}
                            {this.renderBtn(
                                "Search IMDb",
                                "btn btn-outline-warning mx-4"
                            )}
                        </form>
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(BootstrapNav);
