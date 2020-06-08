import React, { Component } from "react";
import state from "../state";
import BootstrapInput from "./bootstrapInput";

class BootstrapForm extends Component {
    state = state;

    handleChange = (e) => {
        const current = e.target;
        const data = { ...this.state.data };
        data[current.name] = current.value;
        this.setState({ data });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.doSubmit();
    };

    renderBtn() {
        return <button className="btn btn-primary">Submit</button>;
    }

    renderInput(name, label, type) {
        const { data } = this.state;
        return (
            <BootstrapInput
                name={name}
                label={label}
                type={type}
                value={data[name]}
                onChange={this.handleChange}
            />
        );
    }
}

export default BootstrapForm;
