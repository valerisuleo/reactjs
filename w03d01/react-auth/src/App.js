import React, { Component } from 'react';
import './App.css';
import MoviesRouter from './components/router';
import authService from './service/authService';

class App extends Component {
    state = {}

    componentDidMount() {
        const user = authService.getCurrentUser();
        if (user) {
            this.setState({ user });
        }
    }


    render() {
        const { user } = this.state;        
        return (
            <MoviesRouter user={user}></MoviesRouter>
        );
    }
}

export default App;