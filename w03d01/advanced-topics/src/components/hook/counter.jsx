import React, { Component } from 'react';
import CounterHook from './counterHooks';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterHook></CounterHook>
            </div>
        );
    }
}

export default Counter;