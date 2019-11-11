import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ['tag1', 'tag2', 'tag3']
  };
  // state = {
  //   value: 0,
  //   tags: ['tag1', 'tag2', 'tag3']
  // };

  render() {
    console.log('props', this.props);

    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment Btn</button>
          <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete Btn</button>
        {
        //   <ul>
        //   {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        // </ul>
      }
      </div>
    );
  }

  handleIncrement = () => {
    console.log('Ohhh you click me!', this);
    this.setState({ value: this.state.value + 1 });
  }


  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += (this.state.value === 0) ? 'badge-warning' : 'badge-primary';
    return classes;
  }

  formatCount() {
    const count  = this.state.value;
    // const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}


export default Counter;
