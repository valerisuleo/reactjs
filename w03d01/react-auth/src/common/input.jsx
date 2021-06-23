import React from "react";

const Input = props => {
    const { value, onChange, name, label, type } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
};

export default Input;
