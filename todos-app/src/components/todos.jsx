import React, { Component } from "react";
import Form from "../common/form";

class Todos extends Form {
    state = {
        data: {
            task: "",
            done: false
        },
        todos: [
            { task: "washing", done: false },
            { task: "cleaning", done: false },
            { task: "homework", done: false },
            { task: "sleep", done: false },
            { task: "buy shoes", done: false }
        ],
        isOpen: false
    };

    doSubmit = () => {
        const data = {...this.state};
        const todos = [...this.state.todos];
        let isOpen = {...this.state.isOpen};

        todos.push(this.state.data);
        isOpen = false;
        // update todos, hide form, clean input field
        this.setState({ todos, isOpen, data });
    };

    toggle = () => {
        this.setState(currentValue => ({
            isOpen: !currentValue.isOpen
        }));
    };

    render() {
        const { isOpen } = this.state;

        return (
            <main className="container">
                <h1 className="m-5">React todos-app: reusable form Component</h1>

                <div className="row">
                    <div className="col">
                        <ul className="list-group mb-3">
                            {this.state.todos.map(item => (
                                <li className="list-group-item" key={item.task}>
                                    {item.task}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={this.toggle}
                            className="btn btn-primary">Add Todo
                        </button>
                    </div>
                </div>

                <div className="row p-5">
                    <div className="col">
                        {isOpen ? (
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput("task")}
                                {this.renderBtn("Add")}
                            </form>
                        ) : null}
                    </div>
                </div>
            </main>
        );
    }
}

export default Todos;
