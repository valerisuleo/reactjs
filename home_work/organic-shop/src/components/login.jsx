import React from "react";
import BootstrapForm from "../reusable-components/bsForm";
import axios from "axios";

class Login extends BootstrapForm {
    state = {
        data: {
            email: "",
            password: "",
        },
    };

    componentDidMount() {
        // this.login();
    }

    login = async (credentials) => {
        const promise = await axios.post('http://localhost:4000/login', credentials)
        const response = await promise;
        const { data } = response;
        console.log(data);
    };

    doSubmit() {
        this.login(this.state.data);
    }

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-md-12 col-lg-6">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("email", "email", "Email address")}
                        {this.renderInput("password", "password", "Password")}
                        {this.renderBtn("Submit")}
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
