import React, { Component } from "react";
import http from "../../service/httpService";
import api from "../../config.json";
import movieState from "../../movieState";
import Form from "../../common/form";
import { Link } from "react-router-dom";

class MovieShow extends Form {
    state = movieState;

    componentDidMount() {
        this.getMovie();
    }

    async getMovie() {
        const { id } = this.props.match.params;
        const response = await http.get(`${api.movies}/${id}`);
        this.setState({ movie: response.data });
    }

    render() {
        const { movie } = this.state;

        return (
            <React.Fragment>
                <h1>MovieShow</h1>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>numberInStock</strong>:{" "}
                                {movie.numberInStock}
                            </li>
                            <li className="list-group-item">
                                <strong>dailyRentalRate</strong>:{" "}
                                {movie.dailyRentalRate}
                            </li>
                            <li className="list-group-item">
                                <strong className="mr-2">Liked:</strong>
                                {"" + movie.liked}
                            </li>
                        </ul>
                        <Link to="/movies" className="btn btn-primary m-4">
                            Go Movies
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MovieShow;
