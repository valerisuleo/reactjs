import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Counters from './components/counter/parent/counters';

class App extends Component {

    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    
    render() { 
        return (
            <React.Fragment>
                <Navbar totalCount={this.state.counters.filter(item => item.value > 0).length} />
                {/* <Navbar totalCount={this.calcTotalCount()} /> */}
                {/* <Navbar totalCount={this.state.counters.length} /> */}
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                        onIncrement={this.handleIncrement}>
                    </Counters>
                </main>
            </React.Fragment>
        );
    }

    // calcTotalCount() {
    //     const totalCount = this.state.counters.filter((el) => {
    //         return el.value > 0;
    //     });
    //     return totalCount.length;

    //     // this is the same:
    //     {this.state.counters.filter(item => item.value > 0).length}
    // }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
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

export default App;
