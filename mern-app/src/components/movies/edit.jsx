import React, { Component } from "react";
import http from "../../services/httpService";
import config from "../../config.json";
import _ from "lodash";
import Form from "../common/form";

class MovieEdit extends Form {
    state = {
        data: {
            title: "",
            genre: "",
            numberInStock: "",
            dailyRentalRate: "",
            liked: false
        },
        options: [],
        errors: {}
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await http.get(config.moviesAPI + `/${id}`);
        const { data } = response;

        const all = await http.get(config.moviesAPI);
        this.getGenres(all);

        this.setState({ data });
    }

    getGenres(all) {
        const { data } = all;

        const genresUnfilter = data.map(item => {
            return item.genre;
        });

        const options = _.uniqBy(genresUnfilter, "name");

        this.setState({ options, genre: options.name });
    }
    
    doSubmit = async () => {
        const id = this.props.match.params.id;
        const movieUpdated = {...this.state.data };
        await http.put(config.moviesAPI + `/${id}`, movieUpdated);
        this.props.history.push('/movies');
    }

    render() {
        return (
            <React.Fragment>
                <h1>Edit</h1>

                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("text", "title", "Title")}
                    {this.renderInput("text", "numberInStock", "NumberInStock")}
                    {this.renderInput("text","dailyRentalRate","DailyRentalRate")}
                    {this.renderSelect("genre","Genre",this.state.options)}

                    <button className="btn btn-primary">Save Changes</button>

                </form>
            </React.Fragment>
        );
    }
}

export default MovieEdit;
