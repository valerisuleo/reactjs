import React, { Component } from 'react';
import './App.scss';
import Home from './views/home/home';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <main className="container">
                    <Switch>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
