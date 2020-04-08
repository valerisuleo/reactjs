import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
    componentDidMount() {
        console.log("contxt", this.context); // return our currentUser obj.
    }

    render() {
        return (
            <UserContext.Consumer>
                {(value) => (
                    <div>
                        MovieList:{" "}
                        {value.currentUser ? value.currentUser : ""}
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}

MovieList.contextType = UserContext;

export default MovieList;
