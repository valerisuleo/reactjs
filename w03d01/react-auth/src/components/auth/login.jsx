import React, { Component } from "react";
import Form from "../../common/form";
import movieState from "../../movieState";
import * as authService from "../../service/authService";


class Login extends Form {
    state = movieState;

    loginUser() {
        const { data } = this.state;
        authService.login(data);
    }
    
    doSubmit() {
        this.loginUser();
    }

    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "email", "Email")}
                    {this.renderInput("password", "password", "Password")}
                    {this.renderBtn("Login")}
                </form>
            </React.Fragment>
        );
    }
}

export default Login;
