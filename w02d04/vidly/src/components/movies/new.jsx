import React from 'react';
import Form from "../common/form";
import Joi from "joi-browser";
import { getGenres } from "../../services/fakeGenreService";
import { createMovie } from "../../services/fakeMovieService";

class MovieNew extends Form {
    state = {
        data: {
            title: "",
            genres: "",
            rate: "",
            numberInStock: ""
        },
        errors: {}
    };

    schema = {
        title: Joi.string()
            .required()
            .label("Title"),
        genres: Joi.string()
            .required()
            .label("Genres"),
        numberInStock: Joi.number()
            .integer()
            .required()
            .label("number In Stock"),
        rate: Joi.number()
            .max(10)
            .required()
            .label("Rate")
    };

    doSubmit = (e) => {
        console.log("POST from '/new' ", e.data);
        const movieNew = createMovie(e.data);
        console.log(movieNew);
        this.props.history.push('/movies')
    };

    render() {
        return (
            <div>
                <h1>New Movie</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genres", "Genres", getGenres())}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {this.renderInput("rate", "Rate")}
                    {this.renderSubmitBtn("Submit")}
                </form>
            </div>
        );
    }
}

export default MovieNew;
