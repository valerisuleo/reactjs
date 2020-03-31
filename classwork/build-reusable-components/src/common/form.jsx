import React, { Component } from "react";
import state from "../state";
import Input from "../common/input";
import Select from "../common/select";


class Form extends Component {
    state = state;

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

    renderBtn(string) {
        return <button className="btn btn-primary">{string}</button>;
    }

    // _______________________SELECT_______________________
    getOptions(array) {
        const selectOptions = array.map(item => {
            return {
                ...item
            };
        });
        return selectOptions;
    }

    selectDefaultValue = (key, string) => {
        const { arrOptions } = this.state;
        
        const preSelected = arrOptions.find(item => {
            return item[key] == string;
        });

        if (preSelected) {
            return preSelected[key];
        }
    };
    

    renderSelect(name, label, arrOptions, preSelected) {
        const { data } = this.state;

        return (
            <Select
                name={name}
                label={label}
                onChange={this.handleChange}
                value={data[name] ? data[name] : preSelected}
                arrOptions={arrOptions}
            ></Select>
        );
    }

    // _______________________INPUT_______________________
    renderInput(name, label) {
        const { data } = this.state;
        return (
            <Input
                name={name}
                value={data[name]}
                onChange={this.handleChange}
                label={label}
                class="form-control"
                type="text"
            ></Input>
        );
    }
}

export default Form;
