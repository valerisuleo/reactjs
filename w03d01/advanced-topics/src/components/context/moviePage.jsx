import React, { Component } from 'react';
import MovieList from './movieList';
import MovieRow from './movieRow';

class MoviePage extends Component {
    render() {
        return (
            <div>
                <MovieList></MovieList>
                <MovieRow></MovieRow>
            </div>
        );
    }
}

export default MoviePage;