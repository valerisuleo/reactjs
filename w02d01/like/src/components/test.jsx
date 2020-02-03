import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Test extends Component {
    state = {
        all: []
    };

    constructor() {
        super();
        this.state.all = this.getInitialState();
    }

    getInitialState() {
        const movies = getMovies();
        const moviesClone = movies.map(item => {
            const obj = {
                ...item,
                isLiked: false
            }
            return obj;
        });
        return moviesClone;
    }

    handleLike = (item) => {
        item.isLiked = !item.isLiked
        console.log(item.isLiked);
        this.setState({ isLiked: item.isLiked})
    }

    render() {
        return (
            <React.Fragment>
                <h1>isLiked</h1>
                <ul>
                    {this.state.all.map(item => (
                        <li key={item._id} onClick={() => this.handleLike(item)}>
                            {item.title} - <strong>{item.isLiked.toString()}</strong>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default Test;
