import React, { Component } from "react";
import Input from "../common/input";
import state from "./state";
import Joi from "joi-browser";
import _ from "lodash";

class LoginForm extends Component {
    state = state;

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    validate = () => {
        const abortEarly = { abortEarly: false };
        const result = Joi.validate(
            this.state.account,
            this.schema,
            abortEarly
        );        

        if (result.error) {
            const { details } = result.error;

            const mapped = details.map(item => {
                const key = item.path[0];
                const value = item.message.replace(/['"]+/g, "");
                return {
                    [key]: value,
                };
            });

            const errors = Object.assign({}, ...mapped);
            
            return errors;
        } else {
            return {};
        }
    };
    
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
    };
    
    handleChange = e => {
        const currentInput = e.target;
        const errors = { ...this.state.errors };
        const account = { ...this.state.account };
        const errMsg = this.validate();        
        
        if (errMsg[currentInput.name] !== undefined) {
            errors[currentInput.name] = errMsg[currentInput.name];
        }
        
        account[currentInput.name] = currentInput.value;
        const check = (account.password !== '' && account.username !== '');
        this.setState({ account, errors, isEmpty: check });
    };

    render() {
        const { account, errors } = this.state;

        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        value={account.username}
                        onChange={this.handleChange}
                        id="username"
                        name="username"
                        label="Username"
                        errors={errors.username}
                    />

                    <Input
                        value={account.password}
                        onChange={this.handleChange}
                        id="password"
                        name="password"
                        label="Password"
                        errors={errors.password}
                    />

                    <button type="submit" className="btn btn-primary" disabled={!this.state.isEmpty}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
