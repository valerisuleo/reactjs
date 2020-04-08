import React, { Component } from 'react';
import state from '../state';
import Input from './input';

class Form extends Component {
    state = state

    handleChange = e => {
        const data = { ...this.state.data };
        const current = e.target;
        data[current.name] = current.value;
        this.setState({ data });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.doSubmit();
    };

    renderBtn(btnName) { 
        return (
        <button className="btn btn-primary btn-sm">{btnName}</button>
        );
    }
    
    renderInput(key, title) {
        const {data} = this.state; 
        return (
            <Input
            onChange={this.handleChange}  
            value={data[key]}
            name={key}
            label={key}
          ></Input>
        );
    }
}
 
export default Form;