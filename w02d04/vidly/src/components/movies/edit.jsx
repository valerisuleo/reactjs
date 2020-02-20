import React from 'react';
import Form from "../common/form";
import Joi, { log } from "joi-browser";
import { getGenres } from "../../services/fakeGenreService";
import { getMovie, updateMovie } from '../../services/fakeMovieService';

class MovieEdit extends Form {
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

    componentDidMount() {
        this.movieEdit();
    }

    movieEdit() {
        const { id } = this.props.match.params
        const movie = getMovie(id);
        const data = [...this.state.data];
        
        data.title = movie.title;
        data.genres = movie.genre.name;
        data.numberInStock = movie.numberInStock;
        data.rate = movie.dailyRentalRate;

        this.setState({ data, id, genreId: movie.genre._id })
    }

    doSubmit = (e) => {
        const { id } = this.props.match.params
        console.log("PUT from '/edit'", e);
        updateMovie(id, e.data, e.genreId);
        this.props.history.push('/movies')
    };

    render() {
        
        return (
            <div>
                <h1>Edit Movie</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genres", "Genres", getGenres() )}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {this.renderInput("rate", "Rate")}
                    {this.renderSubmitBtn("Save Changes")}
                </form>
            </div>
        );
    }
}

export default MovieEdit;
