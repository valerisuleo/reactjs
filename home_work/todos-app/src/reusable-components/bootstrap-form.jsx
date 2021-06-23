import React, { Component } from "react";
import BootstrapInput from "./bootstrap-input";
import state from "../state";

class BootstrapForm extends Component {
    state = state;

    handleChange = (e) => {
        const current = e.target;
        const newTodo = { ...this.state.formModel };
        newTodo[current.name] = current.value;
        this.setState({ formModel: newTodo });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.doSubmit();
    };

    renderBtn() {
        return (
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        );
    }

    renderInput(label, type, name) {
        const { formModel } = this.state;

        return (
            <BootstrapInput
                value={formModel.title}
                onChange={this.handleChange}
                label={label}
                type={type}
                name={name}
            />
        );
    }
}

export default BootstrapForm;
