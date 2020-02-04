import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movie extends Component {
    state = {
        movies: [],
        pageSize: 10
    };

    constructor() {
        super();
        this.state.movies = this.getInitialState();
        console.log(this.state.movies);
    }

    getInitialState() {
        const movies = getMovies();
        const moviesClone = movies.map(item => {
            const obj = {
                ...item,
                isLiked: false
            };
            return obj;
        });
        return moviesClone;
    }

    render() {
        const { movies, pageSize } = this.state;

        return (
            <main className="container">
                <h1>Vidly Project</h1>

                {movies.length ? (
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col">
                                    <button onClick={this.reset} className="btn btn-secondary btn-sm">Reset</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{item.title}</td>
                                    <td>{item.genre.name}</td>
                                    <td>{item.numberInStock}</td>
                                    <td>{item.dailyRentalRate}</td>
                                    <td>
                                        <button
                                            onClick={() => this.movieDelete(index)}
                                            className="btn btn-danger btn-sm">Delete
                                        </button>
                                    </td>
                                    <td>
                                        <Like onLiked={() => this.handleLike(item)} isLiked={item.isLiked}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">No movies left!</h4>
                        <hr />
                        <button
                            onClick={this.reload}
                            className="btn btn-primary">Reload
                        </button>
                    </div>
                )}
                <Pagination itemsCount={movies.length} pageSize={pageSize} onPageChange={this.handlePageChange}/> 
            </main>
        );
    }

    handlePageChange = () => {
        console.log('wowowow');
        
    }

    handleLike = (item) => {
        item.isLiked = !item.isLiked;
        this.setState({ isLiked: item.isLiked})
    }
    
    reset = () => {
        const { movies } = this.state;
        
        movies.map((item) => {
            item.isLiked = false;
            return item;
        });
        
        this.setState(movies);
    }

    movieDelete = (item) => {
        const { movies } = this.state;
        const currentIndex = item;
        movies.splice(currentIndex, 1);
        this.setState(movies);
    };
}

export default Movie;
