import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/views/home/home';
import Portfolio from './components/views/portfolio/portfolio';
import CloseWindow from './components/close-window/closeWindow';
import About from './components/views/about/about';
import Contact from './components/views/contact';

class Router extends Component {
    render() {
        return (
            <Fragment>
                <CloseWindow></CloseWindow>
                <Switch>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/portfolio" component={Portfolio}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Fragment>
        );
    }
}

export default Router;