import React from "react";

const Input = props => {
    // console.log("Input", props);

    const { name, label, value, onChange } = props;

    return (
        <div className="form-group">
            <label htmlFor={ name }>{ label }</label>
            <input
                value={ value }
                onChange={onChange}
                id={ name }
                name={ name }
                ref={this.username}
                type="text"
                className="form-control"
            />
        </div>
    );
};

export default Input;
