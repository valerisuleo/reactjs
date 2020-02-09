import React, { Component } from "react";

class MovieShow extends Component {
    
    render() {
        const { params } = this.props.match;

        return (
            <div>
                <h1>Movie Show</h1>
                <p>{ params.id }</p>
            </div>
        );
    }
}

export default MovieShow;
