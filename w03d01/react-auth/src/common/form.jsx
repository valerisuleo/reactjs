import React, { Component } from "react";
import movieState from "../movieState";
import Input from "../common/input";

class Form extends Component {
    state = movieState;

    handleChange = e => {
        const current = e.target;
        const data = { ...this.state.data };
        data[current.name] = current.value;
        this.setState({ data });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.doSubmit();
    };

    navigateTo(string) {
        this.props.history.push(string);
    }

    renderBtn(string) {
        return (
            <button type="submit" className="btn btn-primary">
                {string}
            </button>
        );
    }

    renderInput(name, type, label) {
        const { data } = this.state;
        return (
            <Input
                name={name}
                label={label}
                value={data[name] || ""}
                onChange={this.handleChange}
                type={type}
            ></Input>
        );
    }
}

export default Form;
