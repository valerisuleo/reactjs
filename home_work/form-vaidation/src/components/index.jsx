import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import BootstrapForm from "../reusable-components/bootstrapForm";
import "./index.css";

class Home extends BootstrapForm {
    state = {
        data: { flavor: "", size: "" },
        errors: {},
        result: {},
        donuts: [],
    };

    schema = {
        flavor: Joi.string()
            .required()
            .valid(["chocolate", "strawberry", "apple", "custard"]),
        size: Joi.string().required().valid(["small", "medium", "large"]),
    };

    doSubmit(payload) {
        this.addDonut(payload);
        this.setState({ data: { flavor: "", size: "" } });
    }

    addDonut(payload) {
        const donuts = [...this.state.donuts];
        donuts.push(payload);
        this.setState({ donuts });
    }

    render() {
        const { errors, donuts } = this.state;

        return (
            <main className="container p-5">
                <div className="row d-flex justify-content-center">
                    <h1>React Donuts</h1>
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput(
                                "flavor",
                                "What's your flavor?",
                                errors
                            )}

                            {this.renderInput(
                                "size",
                                "What's your size?",
                                errors
                            )}

                            {this.renderBtn()}
                        </form>
                        <ul className="list-group mt-5">
                            {donuts.map((el, i) => (
                                <li key={i} className="list-group-item">
                                    <strong>{el.flavor}</strong>{" "}
                                    <em>{el.size}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
