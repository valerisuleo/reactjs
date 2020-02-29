import React, { Component } from "react";
import http from "../../services/httpService";
import config from "../../config.json";
import Form from "../common/form";

class MovieNew extends Form {
    state = {
        data: {
            title: "",
            genre: {},
            numberInStock: "",
            dailyRentalRate: "",
            liked: false
        },
        options: [],
        errors: {}
    };

    async componentDidMount() {
        const all = await http.get(config.moviesAPI);
        this.getGenres(all);
    }

    doSubmit = async () => {
        
        // this.props.history.push('/movies');
    }

    render() {
        return (
            <React.Fragment>
                <h1>New</h1>

                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("text", "title", "Title")}
                    {this.renderInput("text", "numberInStock", "NumberInStock")}
                    {this.renderInput("text","dailyRentalRate","DailyRentalRate")}
                    {this.renderSelect("genre", "Genre", this.state.options)}

                    <button className="btn btn-primary">Save Changes</button>

                </form>
            </React.Fragment>
        );
    }
}

export default MovieNew;
