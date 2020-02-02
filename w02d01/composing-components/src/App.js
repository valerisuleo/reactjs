import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Counters from './components/counter/parent/counters';

function App() {
    return (
    <React.Fragment>
        <Navbar />
        <main className="container">
            <Counters />
        </main>
   </React.Fragment>
  );
}

export default App;
