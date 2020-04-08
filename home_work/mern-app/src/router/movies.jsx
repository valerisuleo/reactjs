import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MovieIndex from "../components/movies";
import MovieEdit from "../components/movies/edit";
import MovieNew from "../components/movies/new";

class MovieRouter extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/movies/new" component={MovieNew}></Route>
                    <Route path="/movies/:id/edit" exact component={MovieEdit}></Route>
                    <Route path="/movies" component={MovieIndex}></Route>
                    <Route path="/" exact component={MovieIndex}></Route>
                </Switch>
            </div>
        );
    }
}

export default MovieRouter;
