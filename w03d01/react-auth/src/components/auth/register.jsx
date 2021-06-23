import React, { Component } from "react";
import Form from "../../common/form";
import movieState from "../../movieState";
import http from "../../service/httpService";
import api from "../../config.json";

class Register extends Form {

    state = movieState;

    async createUser() {
        const { data } = this.state;
        try {
            await http.post(api.register, data);
            this.navigateTo('/login');
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    }

    doSubmit() {
        this.createUser();
    }

    render() {
        return (
           <React.Fragment>
               <h1>Register</h1>
               <form onSubmit={this.handleSubmit}>
                   {this.renderInput('username', 'text', 'Username')}
                   {this.renderInput('email', 'email', 'Email')}
                   {this.renderInput('password', 'password', 'Password')}
                   {this.renderInput('passwordConfirmation', 'password', 'Password Confirmation')}
                   {this.renderBtn('Register')}
               </form>
           </React.Fragment>
        );
    }
}

export default Register;
