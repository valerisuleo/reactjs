import React, { Component } from "react";
import movieState from "../../movieState";
import http from "../../service/httpService";
import api from "../../config.json";
import Form from "../../common/form";

class MovieEdit extends Form {
    state = movieState;

    componentDidMount() {
        this.getMovie();
    }

    async getMovie() {
        const { id } = this.props.match.params;
        const response = await http.get(`${api.movies}/${id}`);
        this.setState({ movie: response.data });  
        this.initForm();
    }
    
    initForm() {
        const { movie } = this.state;
        const data = { ...this.state.data };

        data.title = movie.title;
        data.numberInStock = movie.numberInStock;
        data.dailyRentalRate = movie.dailyRentalRate;

        this.setState({ data });
    }

    async updateMovie() {
        const { data, movie } = this.state;
        const movies = [...this.state.movies];
        const response = await http.put(`${api.movies}/${movie.id}`, data);
        const movieUpdated = response.data;

        const currentMovie = movies.findIndex((item) => {
            return item.id = movieUpdated.id;
        });
        
        movies[currentMovie] = movieUpdated;

        this.setState({movies, data })
        this.navigateTo(`/movies/${movie.id}`);
    }

    doSubmit() {
        this.updateMovie();
    }

    render() {
        return (
            <React.Fragment>
                <h1>MovieEdit</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'text', 'Title')}
                    {this.renderInput('numberInStock', 'text', 'number In Stock')}
                    {this.renderInput('dailyRentalRate', 'text', 'daily Rental Rate')}
                    {this.renderBtn("Save")}
                </form>
            </React.Fragment>
        );
    }
}

export default MovieEdit;
