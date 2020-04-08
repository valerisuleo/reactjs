import React, { Component, useState, Fragment } from "react";

function CounterHook(props) {
    const [count, setCount] = useState(0);
    const [inputName, setName] = useState("");
    
    return (
        <Fragment>
            <h1>CounterHook</h1>
            <div>Count: {count}</div>
            <button
                className="btn btn-secondary btn-sm m-4"
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>
            <div className='mb-3'>email: {inputName}</div>
            <input
                className="form-control"
                type="email"
                onChange={(e) => setName(e.target.value)}
            />
        </Fragment>
    );
}

export default CounterHook;
