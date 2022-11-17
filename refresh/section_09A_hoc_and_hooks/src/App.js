import "./App.css";
import Navbar from "./common/components/navbar";
import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./common/notFound";
import Movies from "./hoc/movies";
import ClassCounter from "./class-vs-hooks/classCounter";
function App() {
	return (
		<Fragment>
			<Navbar></Navbar>
			<main className="container">
				<Routes>
					<Route path="/hocmovies" element={<Movies />} />
					<Route path="/customers" element="customers" />
					<Route
						path="/class-vs-hooks"
						element={<ClassCounter></ClassCounter>}
					/>
		
					<Route path="/" element={<Navigate to="/hocmovies" />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</Fragment>
	);
}

export default App;
