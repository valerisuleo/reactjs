import React, { Component } from "react";
import Counter from "../child/counter";

class Counters extends Component {

    render() {
        // console.log('Counters', this.props);
        const {onReset, onDelete, onIncrement, onDecrement, counters} = this.props;

        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary m-2">Reset
                </button>

                {counters.map((item) => (
                    <Counter
                        key={item.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={item}>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
