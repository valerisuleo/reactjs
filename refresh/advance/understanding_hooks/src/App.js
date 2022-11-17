import "./App.css";
import React, { Component } from "react";
import AccordionRoute from "./components/views/accordion";
import Search from "./components/views/search";

function App() {
	return (
		<main className="container-fluid">
			<Search></Search>
		</main>
	);
}

export default App;
