import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 25,
        fontWeight: "bold"
    };

    render() {
        let classes = this.getBadgeClass();
        // console.log(this.props);

        return (
            <div style={{ display: "block" }}>
                <span style={this.styles} className={classes}>
                    {this.formatCount()}
                </span>

                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                <button
                    onClick={this.props.onDelete}
                    className="btn btn-danger btn-sm ml-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;