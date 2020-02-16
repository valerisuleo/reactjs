import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class Register extends Form {
    state = {
        data: {
            email: "",
            password: "",
            username: ""
        },
        errors: {}
    };

    schema = {
        email: Joi.string()
            .required()
            .email()
            .label("Email"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        username: Joi.string()
            .required()
            .label("Username")
    };

    doSubmit = () => {
        console.log("POST from '/register' ");
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "Email", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("username", "Username", "username")}
                    {this.renderSubmitBtn("Register")}
                </form>
            </div>
        );
    }
}

export default Register;
