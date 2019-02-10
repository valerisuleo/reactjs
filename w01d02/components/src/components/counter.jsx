// conditional rendering

// import React, { Component } from 'react';
//
// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: []
//   };
//
//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>
//     // else...
//     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
//   }
//
//   render() {
//     return <div>
//       { this.state.tags.length === 0 && 'Pls create a tag!'}
//       {this.renderTags()}
//     </div>;
//   }
// }


/////////////////////////////////////////////////////////////////////////////



import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  // constructor() {
  //   super()
  //   // this.handleIncrement.bind(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   console.log('this', this);
  // }

  render() {

    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button onClick={() => this.handleIncrement(product) } className="btn btn-secondary btn-sm">Increment Btn</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }


  handleIncrement = product => {
    console.log(product);
    console.log('Ohhh you click me!', this);
    this.state({ count: this.state.count + 1});
  }


  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}




// import React, { Component } from 'react';
//
// class Counter extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello World</h1>
//         <button>Increment Btn</button>
//       </React.Fragment>
//     );
//   }
// }
//

export default Counter;
