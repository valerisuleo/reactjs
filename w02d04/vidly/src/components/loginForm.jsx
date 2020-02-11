import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
    state = {
        account: { username: "", password: "" }
    };

    username = React.createRef();

    componentDidMount() {
        // when our component is mounted I want the input filed to get focus
        // this.username.current.focus();
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log('handleSubmit', e);
    };

    handleChange = e => {
        const currentInput = e.currentTarget;
        const account = { ...this.state.account };
        account[currentInput.name] = currentInput.value;
        this.setState({ account });
    };

    render() {
        const { account } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        value={account.username}
                        onChange={this.handleChange}
                        id="username"
                        name="username"
                        label="User Name"
                    />

                    <Input
                        value={account.password}
                        onChange={this.handleChange}
                        id="password"
                        name="password"
                        label="Password"
                    />

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
