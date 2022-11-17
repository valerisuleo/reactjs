import "./App.css";
import MoviesIndex from "./components/moviesIndex";
import Navbar from "./common/components/navbar";
import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieShow from "./components/movieShow";
import NotFound from "./common/notFound";
function App() {
	return (
		<Fragment>
			<Navbar></Navbar>
			<main className="container">
				<Routes>
					<Route path="/movies/:id" element={<MovieShow />} />
					<Route path="/movies" element={<MoviesIndex />} />
					<Route path="/customers" element="customers" />
					<Route path="/" element={<Navigate to="/movies" />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</Fragment>
	);
}

export default App;
