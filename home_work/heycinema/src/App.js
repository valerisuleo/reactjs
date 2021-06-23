import React from 'react';
import "./App.css";
import UIRouter from "./router";
import { useState } from "react";
import BootstrapNav from "./shared/BootstrapNav";
import MovieContext from "./shared/movieContext";

function App() {
    const [movies, setMovies] = useState([]);
    const ctxData = { Search: movies, setMovies };
    return (
        <MovieContext.Provider value={ctxData}>
            <BootstrapNav></BootstrapNav>
            <UIRouter></UIRouter>
        </MovieContext.Provider>
    );
}

export default App;
