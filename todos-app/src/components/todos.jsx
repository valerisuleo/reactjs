import React, { Component } from "react";

class Todos extends Component {
    state = {
        todos: [
            { task: "washing", done: false },
            { task: "cleaning", done: false },
            { task: "homework", done: false },
            { task: "sleep", done: false },
            { task: "buy shoes", done: false }
        ],
        newItem: { task: "", done: false }
    };

    formShow = () => {
        const newItem = { ...this.state.newItem };
        newItem.task = '';
        this.state.isClicked = true;
        this.setState({ 
            isClicked: this.state.isClicked, 
            newItem 
        });
    }

    handleChange = (e) => {
        const newItem = { ...this.state.newItem };        
        newItem.task = e.currentTarget.value;   
        this.setState({ newItem });    
    }

    handleSubmit = e => {
        e.preventDefault();
        const todos = [...this.state.todos];
        todos.push(this.state.newItem);
        this.state.isClicked = false;
        this.setState({ 
            todos, 
            isClicked: this.state.isClicked 
        });
    };

    render() {
        const { todos, newItem } = this.state;

        return (
            <React.Fragment>
                <h1>Todos App</h1>
                <h3>You have {todos.length} todos to do!</h3>

                <button onClick={this.formShow}>Add Todo</button>

                {this.state.isClicked ? (
                    <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="newitem"
                        value={newItem.task}
                        onChange={this.handleChange}
                        placeholder="what do you need to do?"
                    />

                    <button>Add</button>
                </form>
                ) : null }
                

                <ul>
                    {todos.map(item => (
                        <li key={item.task}>{item.task}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default Todos;
