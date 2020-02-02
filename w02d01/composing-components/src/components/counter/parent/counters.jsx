import React, { Component } from "react";
import Counter from "../child/counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    render() {
        const { counters } = this.state;

        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary m-2">Reset
                </button>

                {counters.map((item, index) => (
                    <Counter
                        key={item.id}
                        onDelete={() => this.handleDelete(index)}
                        onIncrement={() => this.handleIncrement(item)}
                        counter={item}>
                    </Counter>
                ))}
            </div>
        );
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const { counters } = this.state;
        counters.map(item => {
            item.value = 0;
            return item;
        });
        this.setState(counters);
    };

    handleDelete = index => {
        const { counters } = this.state;
        let current = index;

        counters.splice(current, 1);
        this.setState(counters);
    };
}

export default Counters;
