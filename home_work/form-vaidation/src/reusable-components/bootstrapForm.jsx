import React, { Component } from "react";
import state from "../state";
import Joi from "joi-browser";
import BootstrapInput from "./bootstrapInput";

class BootstrapForm extends Component {
    state = state;

    handleChange = (e) => {
        const current = e.target;
        const data = { ...this.state.data };
        const errors = { ...this.state.errors };

        const errMsg = this.validateOnTyping(e);
        if (errMsg) {
            errors[current.name] = errMsg;
        } else {
            // WE NEED THIS TO MAKE DISAPPEAR THE ERRORS FROM...
            // ...THE FORM WHEN WE TYPE AGAIN!!!
            delete errors[current.name];
        }

        data[current.name] = current.value;
        this.setState({ data, errors: errors || {} });
    };

    validateOnSubmit = () => {
        const abortEarly = { abortEarly: false };
        const result = Joi.validate(this.state.data, this.schema, abortEarly);

        if (result.error) {
            const { details: arrayOfErrorsMsg } = result.error;
            const mapped = arrayOfErrorsMsg.map((item) => {
                const key = item.path[0];
                const value = item.message.replace(/['"]+/g, "");
                return {
                    [key]: value,
                };
            });

            const errors = Object.assign({}, ...mapped);
            return errors;
        } else {
            return null;
        }
    };

    validateOnTyping = (e) => {
        const current = e.target;
        const key = current.name;
        const value = current.value;

        const objToValidate = {
            [key]: value,
        };

        const subSchema = {
            [key]: this.schema[key],
        };

        const result = Joi.validate(objToValidate, subSchema);
        // console.log('result', result);

        this.setState({ result: result });

        if (!result.error) {
            return null;
        } else {
            const errMsg = result.error.details[0].message;
            return errMsg.replace(/['"]+/g, "");
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateOnSubmit();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit(this.state.data);
    };

    renderInput(name, label, errors) {
        const { data } = this.state;
        return (
            <BootstrapInput
                value={data[name]}
                name={name}
                label={label}
                onChange={this.handleChange}
                errors={errors[name]}
            />
        );
    }

    renderBtn() {
        const { result } = this.state;
        const isFormEmpty = !Object.values(this.state.data).some((x) => x !== null && x !== "");

        return (
            <button
                type="submit"
                className="btn btn-danger"
                disabled={(isFormEmpty && result.error !== null) ||(isFormEmpty && result.error == null)}>Submit
            </button>
        );
    }
}

export default BootstrapForm;
