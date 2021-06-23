import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MoviesIndex from "./movies/index";
import MovieShow from "./movies/show";
import MovieEdit from "./movies/edit";
import Register from "./auth/register";
import Login from "./auth/login";
import Navbar from "./navbar";

const MoviesRouter = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="container">
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/edit/:id" component={MovieEdit}></Route>
                    <Route path="/movies/:id" component={MovieShow}></Route>
                    <Route path="/movies" component={MoviesIndex}></Route>
                    <Redirect from="/" exact to="/movies" />
                </Switch>
            </div>
        </React.Fragment>
    );
};

export default MoviesRouter;


