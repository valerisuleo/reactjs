import React, { Component } from "react";

import "./App.css";
import MoviesWrapper from "./context/moviesListWrapper";
import { getMovies } from "./services/fakeMovieService";
import MoviesContext from "./context/moviesContext";

class App extends Component {
	state = {
		movies: getMovies(),
	};
	render() {
		return (
			<MoviesContext.Provider value={this.state.movies}>
				<MoviesWrapper></MoviesWrapper>
			</MoviesContext.Provider>
		);
	}
}

export default App;
