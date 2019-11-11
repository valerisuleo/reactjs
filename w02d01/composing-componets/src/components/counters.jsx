import React from 'react';
import Counter from './counter';

class Counters extends React.Component {

  state = {
    counters: [
      { id: 1, value:4 },
      { id: 2, value:0 },
      { id: 3, value:0 },
      { id: 4, value:0 },
    ]
  };

  counterDelete = () => {
    console.log('From counter with love!');
  }

  render () {

    return (
      <React.Fragment>
        <div>
          {this.state.counters.map(item =>
            <Counter key={item.id} value={item.value} selected={true} id={item.id} onDelete={this.counterDelete}></Counter>)}
        </div>
      </React.Fragment>
    )
  }
}

export default Counters;
