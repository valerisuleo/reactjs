import React, { Component } from "react";
import state from "./state";
import Joi, { log } from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
    state = state;

    validateOnSubmit = () => {
        const abortEarly = { abortEarly: false };
        const result = Joi.validate(this.state.data, this.schema, abortEarly);

        // console.log('result', result);

        if (result.error) {
            const { details } = result.error;

            const mapped = details.map(item => {
                const key = item.path[0];
                const value = item.message.replace(/['"]+/g, "");
                return {
                    [key]: value
                };
            });

            const errors = Object.assign({}, ...mapped);
            return errors;
        } else {
            return null;
        }
    };

    validateOnChange = e => {
        const current = e.target;
        const key = current.name;
        const value = current.value;

        const objToValidate = {
            [key]: value
        };

        const subSchema = {
            [key]: this.schema[key]
        };

        // console.log("subSchema", subSchema);

        const result = Joi.validate(objToValidate, subSchema);
        // console.log("result", result);

        if (!result.error) {
            return null;
        } else {
            const errMsg = result.error.details[0].message;

            return errMsg.replace(/['"]+/g, "");
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validateOnSubmit();
        // console.log('errors', errors);

        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit(this.state);
    };

    handleChange = e => {
        const currentInput = e.target;
        const errors = { ...this.state.errors };
        const data = { ...this.state.data };
        const errMsg = this.validateOnChange(e);

        if (errMsg) {
            errors[currentInput.name] = errMsg;
        } else {
            delete errors[currentInput.name];
        }

        data[currentInput.name] = currentInput.value;

        this.setState({ data, errors: errors || {} });
    };

    renderSubmitBtn(label) {
        return (
            <button type="submit" className="btn btn-primary">
                {label}
            </button>
        );
    }

    renderInput(name, label, text) {
        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                value={data[name]}
                label={label}
                type={text}
                id={name}
                onChange={this.handleChange}
                errors={errors[name]}
            />
        );
    }

    renderSelect(name, label, arrayOfOptions) {
        const { data, errors } = this.state;

        return (
            <Select
                onChange={this.handleChange}
                label={label}
                value={data[name]}
                name={name}
                arrayOfOptions={arrayOfOptions}
                errors={errors[name]}
            />
        );
    }
}

export default Form;
