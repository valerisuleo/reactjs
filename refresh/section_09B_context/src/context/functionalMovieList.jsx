import React, { useContext } from "react";
import MoviesContext from "./moviesContext";

export default function FunctionalMovieList() {
	const movies = useContext(MoviesContext);
	return (
		<div>
			<h3>Functional component</h3>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</div>
	);
}
