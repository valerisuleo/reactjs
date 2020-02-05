import React, { Component, cloneElement } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utilities/paginate";
import { getGenres, genres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";

class Movie extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
    };

    constructor() {
        super();
        this.state.movies = this.getInitialMoviesState();
        this.state.genres = this.getInitialGenreState();
        console.log('this.state.genre', this.state.genres);
        // console.log(this.state.movies);
    }

    getInitialMoviesState() {
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
    
    getInitialGenreState() {
        const genres = getGenres();
        const genresAll = {
            _id: '5b21ca3eeb7f6fbccd471811',
            name: 'All Genres',
            isActive: true
        }
        
        const genresClone = [...genres].map((item) => {
            return {
                ...item,
                isActive: false
            }
        });

        genresClone.unshift(genresAll);
        return genresClone;
    }

    render() {
        const { pageSize, currentPage, genres } = this.state;
        const movies = paginate(this.state.movies, currentPage, pageSize);

        return (
            <React.Fragment>

                <div className="row">
                    <div className="col m-3">
                        <h1>iMovies</h1>
                    </div>
                </div>

                <div className="row">

                    <aside className="col-md-3">
                        <ListGroup 
                        onChangedGenre={this.handleGenreChange} 
                        genres={ genres } />
                    </aside>

                    <section className="col-md-9">
                        {movies.length ? (
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Rate</th>
                                        <th scope="col">
                                            <button
                                                onClick={this.resetHeart}
                                                className="btn btn-secondary btn-sm"
                                            >
                                                Reset
                                            </button>
                                        </th>
                                        <th scope="col"></th>
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
                                                <Like
                                                    onLiked={() =>
                                                        this.handleLike(item)
                                                    }
                                                    isLiked={item.isLiked}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        this.movieDelete(index)
                                                    }
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="alert alert-danger" role="alert">
                                <h4 className="alert-heading">
                                    No movies left!
                                </h4>
                                <hr />
                                <button
                                    onClick={this.reload}
                                    className="btn btn-primary"
                                >
                                    Reload
                                </button>
                            </div>
                        )}
                        <Pagination
                            itemsCount={this.state.movies.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </section>
                </div>
            </React.Fragment>
        );
    }

    handleGenreChange = (genre) => {
        this.filterActive(genre);

        if (genre.name === 'All Genres') return this.getAllGenres();
        // else...
        this.state.movies = this.getInitialMoviesState();
        const clone = [...this.state.movies];
        const moviesFiltered = this.filterMovies(clone, genre);
        this.setState({ movies: moviesFiltered });
    };

    filterActive(genre) {
        const { genres } = this.state;
        
        genres.forEach((item) => {
            item.isActive = false;
        });
        
        const current = genres.find((item) => {
            return item.name === genre.name;
        });
        current.isActive = true;
    }

    getAllGenres() {        
        this.state.movies = this.getInitialMoviesState();
        this.setState({ movies: this.state.movies });
    }

    filterMovies(arr, obj) {
        return arr.filter((item) => {
            return item.genre.name === obj.name;
        });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleLike = item => {
        item.isLiked = !item.isLiked;
        this.setState({ isLiked: item.isLiked });
    };

    resetHeart = () => {
        const { movies } = this.state;
        movies.map(item => {
            item.isLiked = false;
            return item;
        });
        this.setState(movies);
    };

    movieDelete = item => {
        const { movies } = this.state;
        const currentIndex = item;
        movies.splice(currentIndex, 1);
        this.setState(movies);
    };
}

export default Movie;
