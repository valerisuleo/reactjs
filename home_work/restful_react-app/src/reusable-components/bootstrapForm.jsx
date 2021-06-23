import React, { Component } from "react";
import state from "../state";
import BootstrapInput from "./bootstrapInput";

class BootstrapForm extends Component {
    state = state;

    handleChange = (e) => {
        const current = e.target;
        const data = { ...this.state.data };
        data[current.name] = current.value;
        this.setState({ data: data });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.doSubmit(this.state.data);
    };

    navigateTo(path) {
        this.props.history.push(path);
    }

    renderBtn(label) {
        return (
            <button type="submit" className="btn btn-primary">
                {label}
            </button>
        );
    }

    renderInput(label, name) {
        const { data } = this.state;
        return (
            <BootstrapInput
                label={label}
                name={name}
                value={data[name]}
                onChange={this.handleChange}
            ></BootstrapInput>
        );
    }
}

export default BootstrapForm;
