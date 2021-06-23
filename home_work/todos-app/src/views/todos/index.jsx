import React, { Component, Fragment } from "react";
import BootstrapForm from "../../reusable-components/bootstrap-form";
import BootstrapList from "../../reusable-components/bootstrap-list";
import axios from "axios";

class TodosIndex extends BootstrapForm {
    state = {
        formModel: { title: "", completed: false },
        todos: [],
        isOpen: true,
    };

    componentDidMount() {
        this.todosIndex();
    }

    async todosIndex() {
        const promise = axios.get("https://jsonplaceholder.typicode.com/todos");
        const response = await promise;
        let dataSliced = response.data;
        dataSliced = dataSliced.slice(0, 5);
        this.setState({ todos: dataSliced });
    }

    doSubmit() {
        this.addTodo(this.state.formModel);
        // clean form
        this.setState({ formModel: { title: " ", completed: false } });
    }

    toggle = () => {
        this.setState((currentValue) => ({
            isOpen: !currentValue.isOpen,
        }));
    };

    addTodo(newTodo) {
        const todos = [...this.state.todos];
        todos.push(newTodo);
        this.setState({ todos });
    }

    handleDelete = (current) => {
        const todos = [...this.state.todos];
        const filtered = todos.filter(item => item.id !== current.id);
        this.setState({ todos: filtered});
    }

    render() {
        const { todos, isOpen } = this.state;
        return (
            <Fragment>
                <h3>React Todos</h3>
                <button onClick={this.toggle} className="btn btn-primary">
                    Add
                </button>

                <div className="row mt-5">
                    <div className="col-md-12 col-lg-6">
                        {isOpen ? (
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    {this.renderInput(
                                        "New Todo",
                                        "text",
                                        "title"
                                    )}
                                </div>

                                {this.renderBtn()}
                            </form>
                        ) : null}
                    </div>

                    <div className="col-md-12 col-lg-6">
                        <BootstrapList
                            collection={todos}
                            properties={["title", "completed"]}
                            orderByKey={"title"}
                            btn={true}
                            btnLabel={'Delete'}
                            btnClass={'danger'}
                            onDelete={this.handleDelete}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TodosIndex;
