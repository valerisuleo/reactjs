import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Movie from './components/hoc/movie'
import RegularCounter from './components/regularCounter'
import Counter from './components/hook/counter';
import MoviePage from './components/context/moviePage'
import UserContext from './components/context/userContext'
import Login from './components/context/login';

class App extends Component {

    state = {
        currentUser: ''
    }


    // ______________________________________FOR HOC AND HOOK______________________________________

    // state = {
    //     currentUser: { name: 'Mike' }
    // }

    // render() {
    //     return (
    //         <div>
    //             <Navbar></Navbar>
    //             <div className="container">
    //                 <Switch>
    //                     <Route path="/context" component={MoviePage}></Route>
    //                     <Route path="/counterhook" component={Counter}></Route>
    //                     <Route path="/counteregular" component={RegularCounter}></Route>
    //                     <Route path="/hoc" component={Movie}></Route>
    //                     <Route path="/" component={Movie}></Route>
    //                 </Switch>
    //             </div>
    //         </div>
    //     );
    // }



    // _________________________________________FOR CONTEXT_________________________________________

    // add method take username as arg. let's say is what the user typed in the form
    handleLogin = (credentials) => {
        // now we shoud call the server and get the informations about this user. 
        // We simulate that by using a console.log()
        console.log('credentials', credentials);
        // Let's imagine we get a user obj from the server...
        const {username} = credentials;
        // const user = { name: username };
        this.setState({ currentUser: username });
        
    }
    
    render() {
        return (
            <UserContext.Provider value={{ 
                currentUser: this.state.currentUser, 
                onLoggedin: this.handleLogin 
                }}>
                <MoviePage></MoviePage>
                <Login></Login>
            </UserContext.Provider>
        );
    }
}




export default App;
