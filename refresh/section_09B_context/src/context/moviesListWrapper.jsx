import React from "react";
import FunctionalMovieList from "./functionalMovieList";
import MoviesList from "./moviesList";

const MoviesWrapper = () => {
	return (
		<div>
			<h1>Movie wrapper</h1>
			<div>
				<MoviesList></MoviesList>
                <FunctionalMovieList></FunctionalMovieList>
			</div>
		</div>
	);
};

export default MoviesWrapper;
