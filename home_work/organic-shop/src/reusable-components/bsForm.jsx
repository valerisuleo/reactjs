import React, { Component } from "react";
import state from "../state";
import BootstrapInput from "./bsInput";

class BootstrapForm extends Component {
    state = state;

    handleChange = (e) => {
        const data = { ...this.state.data };
        const current = e.target;
        data[current.name] = current.value;
        // console.log(data);
        this.setState({ data });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.doSubmit();
    };

    renderBtn(label) {
        return <button className="btn btn-primary">{label}</button>;
    }

    renderInput(name, type, label) {
        const { data } = this.state;

        return (
            <BootstrapInput
                value={data[name]}
                name={name}
                type={type}
                label={label}
                onChange={this.handleChange}
            />
        );
    }
}

export default BootstrapForm;
