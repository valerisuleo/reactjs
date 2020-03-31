import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../../services/httpService";
import config from "../../config.json";

class MovieIndex extends Component {
    state = {
        movies: []
    };

    async componentDidMount() {
        const response = await http.get(config.moviesAPI);
        const movies = response.data;
        this.setState({ movies });
    }

    handleDelete = async movie => {
        const defaultIndex = this.state.movies;
        const movies = [...this.state.movies];

        let movieIndex = movies.indexOf(movie);
        movies.splice(movieIndex, 1);
        this.setState({ movies });

        // error handling
        try {
            await http.delete(config.moviesAPI + `/${movie.id}`);
        } catch (error) {
            if (error.response.status === 404) {
                console.log("404 - Not Found");
            }
            this.setState({ movies: defaultIndex });
        }
    };

    navigateTo(url) {
        this.props.history.push(url);
    }

    render() {
        const { movies } = this.state;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-3">
                        <h1>Index</h1>
                    </div>
                    <div className="col-md-9">
                        <button onClick={ ()=> this.navigateTo('/movies/new') } className="btn btn-primary m-2 mr-5 float-right">Add Movie</button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">numberInStock</th>
                            <th scope="col">dailyRentalRate</th>
                            <th scope="col">liked</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.genre.name}</td>
                                <td>{item.numberInStock}</td>
                                <td>{item.dailyRentalRate}</td>
                                <td>{`${item.liked}`}</td>
                                <th>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() =>
                                            this.navigateTo(
                                                `/movies/${item.id}/edit`
                                            )
                                        }
                                    >
                                        Update
                                    </button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => this.handleDelete(item)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default MovieIndex;
