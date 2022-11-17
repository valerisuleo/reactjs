import React, { Component } from "react";
import MoviesContext from "./moviesContext";

export default class MoviesList extends Component {
	render() {
		return (
			<div>
                <h3>Class component:</h3>
				<MoviesContext.Consumer>
					{(movies) => { 
						return (
							<ul>
								{movies.map((movie) => (
									<li key={movie.id}>{movie.title}</li>
								))}
							</ul>
						);
					}}
				</MoviesContext.Consumer>
			</div>
		);
	}
}
