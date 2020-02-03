import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };

    render() {
        let classes = this.getBadgeClass();
        // console.log('Counter Single', this.props);

        return (
            <div className="row">

                <div className="col-1">
                    <span style={this.styles} className={classes}>
                        {this.formatCount()}
                    </span>
                </div>

                <div className="col">
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm">+
                    </button>
                    
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                        className="btn btn-secondary btn-sm m-2">-
                    </button>

                    <button
                        onClick={this.props.onDelete}
                        className="btn btn-danger btn-sm">Delete
                    </button>
                </div>

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