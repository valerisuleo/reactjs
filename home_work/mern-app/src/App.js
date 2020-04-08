import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRouter from './router/movies';

function App() {
  return (
    <div className="container">
        <MovieRouter></MovieRouter>
    </div>
  );
}

export default App;
