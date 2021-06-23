import React, { Component } from "react";
import BootstrapInput from "./BootstrapInput";
import state from "../../state";

class BootstrapForm extends Component {
    state = state;

    handleChange = (e) => {
        const current = e.currentTarget;
        const data = { ...this.state.data };
        data[current.name] = current.value;
        this.setState({ data });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.doSubmit(this.state.data);
    };

    renderBtn(label, className) {
        return (
            <button type="submit" className={className}>
                {label}
            </button>
        );
    }

    renderInput(label, name, placeholder) {
        const { data } = this.state;
        return (
            <BootstrapInput
                placeholder={placeholder}
                label={label}
                name={name}
                value={data[name]}
                onChange={this.handleChange}
            ></BootstrapInput>
        );
    }
}

export default BootstrapForm;
