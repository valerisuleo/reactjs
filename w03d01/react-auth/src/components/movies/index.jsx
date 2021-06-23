import React, { Component } from "react";
import api from "../../config.json";
import http from "../../service/httpService";
import * as authService from "../../service/authService";
import { Link } from "react-router-dom";

class MoviesIndex extends Component {
    state = {
        data: {},
        movie: {},
        movies: [],
    };

    constructor(props) {
        super(props);
        authService.secureRoute(props.history);
    }

    async componentDidMount() {
        this.moviesIndex();
    }

    async moviesIndex() {
        const response = await http.get(api.movies);
        const movies = response.data;
        this.setState({ movies });
    }

    handleDelete = async (movie) => {
        const response = await http.delete(api.movies + `/${movie.id}`);
        console.log(response);
        
        const movies = [...this.state.movies];
        let movieIndex = movies.indexOf(movie);
        movies.splice(movieIndex, 1);

        this.setState({ movies });
    };

    render() {
        const { movies } = this.state;

        return (
            <React.Fragment>
                <h1>MoviesIndex</h1>

                <ul className="list-group">
                    {movies.map((item) => (
                        <li className="list-group-item" key={item.id}>
                            <Link to={`/edit/${item.id}`}>{item.title}</Link>
                            <button
                                className="btn btn-danger btn-sm float-right"
                                onClick={() => this.handleDelete(item)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default MoviesIndex;
