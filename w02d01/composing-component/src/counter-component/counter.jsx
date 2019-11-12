import React, { Component } from "react";

class CounterComponent extends Component {
  state = {
    count: this.props.value,
    message: "Click To Start to count"
  };

  render() {
      
    return (
      <div style={this.styles}>
        {/* {this.props.children} */}
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment Btn
        </button>
      </div>
    );
  }

  styles = {
    marginTop: '50px',
    float: 'left'
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClass() {
    let classes = "bage m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const { message } = this.state;
    return count === 0 ? message : count;
  }
}

export default CounterComponent;
