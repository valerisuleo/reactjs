import React, { Component } from "react";
import BootstrapForm from "../../../reusable-components/bootstrapForm";
import authService from "../../../services/authService";

class Login extends BootstrapForm {
    state = {
        data: { email: "", password: "" },
    };

    loginUser() {
        const { data: payload } = this.state;
        authService.login(payload);
    }

    doSubmit() {
        this.loginUser();
        this.setState({ data: { email: "", password: "" } });
    }

    render() {
        return (
            <div className="row p-3">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("email", "Email address", "email")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderBtn()}
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
