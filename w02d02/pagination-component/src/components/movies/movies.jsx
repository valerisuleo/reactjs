import React, { Component } from "react";
import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import MoviesTable from "./dataTables";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import { paginate } from "../../utilities/paginate";
import _ from "lodash";


class Movie extends Component {
    state = {
        movies: [],
        genres: [],
        filtered: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };

    componentDidMount() {
        const genres = [{ _id: '', name: "All Genres" }, ...getGenres()];
        this.setState({ movies: this.getInitialState(), genres: genres });
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

    paginateAndFilter() {
        const { selectedGenre, pageSize, currentPage } = this.state;

        const movies = paginate(this.state.movies, currentPage, pageSize);
        return selectedGenre && selectedGenre._id ? this.state.movies.filter( m => m.genre._id === selectedGenre._id) : movies;
    }

    render() {
        const { pageSize, currentPage, genres, selectedGenre, sortColumn } = this.state;
        
        this.state.filtered = this.paginateAndFilter();
        
        const sorted = _.orderBy(this.state.filtered, [sortColumn.path], [sortColumn.order]);
        
        this.state.filtered = sorted;
        
        return (
            <React.Fragment>
                <div className="row">
                    <h1>Vidly Project</h1>
                </div>

                <div className="row">
                    <aside className="col-md-3">
                        <ListGroup
                            genres={ genres }
                            selectedGenre={this.state.selectedGenre}
                            onGenreSelected={this.handleGenresSelect}
                        />
                    </aside>

                    <section className="col-md-9">
                        <MoviesTable
                            onSort={this.handleSort}
                            onLiked={this.handleLike}
                            onDelete={this.handleDelete}
                            filtered={this.state.filtered}
                        />

                        <Pagination
                            itemsCount={
                                !selectedGenre ||
                                selectedGenre.name === "All Genres"
                                    ? this.state.movies.length
                                    : this.state.filtered.length
                            }
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </section>
                </div>
            </React.Fragment>
        );
    }

    handleSort = (path) => {
        console.log(path);
        const sortColumn = {...this.state.sortColumn};
        if (sortColumn.path === path)
        sortColumn.order = (sortColumn.order === 'asc' ? 'desc' : 'asc');
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.setState({ sortColumn })
    };

    handleGenresSelect = genre => {
        // console.log(genre);
        this.setState({ selectedGenre: genre });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleLike = item => {
        item.isLiked = !item.isLiked;
        this.setState({ isLiked: item.isLiked });
    };

    reset = () => {
        const { movies } = this.state;

        movies.map(item => {
            item.isLiked = false;
            return item;
        });

        this.setState(movies);
    };

    handleDelete = item => {
        const { movies, selectedGenre, filtered } = this.state;
        let dynamicArray = !selectedGenre ? movies : filtered;

        const index = dynamicArray.indexOf(item);
        dynamicArray[index] = { ...dynamicArray[index] };
        dynamicArray.splice(index, 1);
        this.setState({ movies: dynamicArray });
    };
}

export default Movie;
