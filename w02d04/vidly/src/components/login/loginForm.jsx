import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
    state = {
        data: {
            password: "",
            username: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = () => {
        console.log("POST req on submit!");
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", 'text')}
                    {this.renderInput("password", "Password", 'password')}
                    {this.renderSubmitBtn("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
