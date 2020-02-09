import React, { Component } from "react";

class MovieShow extends Component {


    handleSave = () => {
        this.props.history.push('/movies');
    };

    render() {
        const { params } = this.props.match;

        return (
            <div>
                <h1>Movie Show</h1>
                <p>{ params.id }</p>

                <button onClick={this.handleSave} className="btn btn-primary btn-md">Save</button>
            </div>
        );
    }
}

export default MovieShow;
