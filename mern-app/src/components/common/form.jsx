import React, { Component } from "react";
import state from "./state";
import Input from "./input";
import Select from "./select";
import _ from "lodash";

class Form extends Component {
    state = state;

    getGenres(all) {
        const { data } = all;

        const genresUnfilter = data.map(item => {
            return item.genre;
        });

        const options = _.uniqBy(genresUnfilter, "name");

        this.setState({ options, genre: options });
    }

    handleChange = e => {
        const data = { ...this.state.data };
        const current = e.target;
        const key = current.name;
        data[key] = current.value;

        if (key === 'genre') {
            data[key] = {
                name: current.value,
                id: this.state.data.genre.id
            }
        }
        this.setState({ data });
    };

    handleSubmit = (e) => {
        e.preventDefault(e);
        this.doSubmit();
    }

    renderInput(type, name, label) {
        const { data } = this.state;
        return (
            <Input
                type={type}
                name={name}
                label={label}
                value={data[name]}
                onChange={this.handleChange}
            ></Input>
        );
    }

    renderSelect(name, label, options) {
        const { data } = this.state;
        console.log('data', data);
        
        return (
            <Select
                name={name}
                label={label}
                value={data[name].name}
                onChange={this.handleChange}
                arrayOfOptions={options}
            ></Select>
        );
    }
}

export default Form;
