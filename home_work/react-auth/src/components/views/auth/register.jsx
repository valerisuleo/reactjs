import React, { Component } from "react";
import BootstrapForm from "../../../reusable-components/bootstrapForm";
import http from "../../../services/httpService";
import config from "../../../config.json";

class Register extends BootstrapForm {
    state = {
        data: {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        },
    };

    async createUser(payload) {
        try {
            const promise = http.post(`${config.apiEndPoint}/register`, payload);
            const response = await promise;
            const { status } = response;
            if (status === 201) {
                this.props.history.push('/login');
            }
            
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    }

    doSubmit() {
        const { data: value} = this.state;

        this.createUser(value);
        this.setState({
            data: {
                username: "",
                email: "",
                password: "",
                passwordConfirmation: "",
            },
        });
    }

   

    render() {
        return (
            <div className="row p-3">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("username", "Username", "text")}
                        {this.renderInput("email", "Email address", "email")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderInput(
                            "passwordConfirmation",
                            "Password Confirmation",
                            "password"
                        )}
                        {this.renderBtn()}
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
