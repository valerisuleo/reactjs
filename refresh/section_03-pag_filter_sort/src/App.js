import "./App.css";
import MoviesIndex from "./components/moviesIndex";
import Navbar from "./common/navbar";
import React, { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Navbar></Navbar>
			<main className="container">
				<MoviesIndex></MoviesIndex>
			</main>
		</Fragment>
	);
}

export default App;
