import React, { Component } from "react";
import state from "./state";
import Input from "./input";
import Select from "./select";

class Form extends Component {
    state = state;

    handleChange = e => {
        const data = { ...this.state.data };
        const current = e.target;
        const key = current.name;
        data[key] = current.value;
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
