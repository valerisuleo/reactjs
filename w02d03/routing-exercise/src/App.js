import React, { Component } from "react";
import Movies from "./components/movies/movies";
import "./App.css";
import Navbar from "./components/navBar";
import CustomersIndex from "./components/customers";
import { Route, Switch, Redirect } from "react-router-dom";
import RentalsIndex from "./components/rentals";
import MovieShow from "./components/movies/movieShow";


class App extends Component {
  render() {
    return (
        <main className="container">
            <Navbar></Navbar>
            <div className="content">
                <Switch>
                    <Route path="/rentals" component={ RentalsIndex }></Route>
                    <Route path="/customers" component={ CustomersIndex }></Route>
                    <Route path="/movies/:id" component={ MovieShow }></Route>
                    <Route path="/movies" component={ Movies }></Route>
                    <Route path="/" component={ Movies }></Route>
                </Switch>
            </div>
            
      </main>
    );
  }
}

export default App;
