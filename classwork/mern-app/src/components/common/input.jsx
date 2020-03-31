import React from "react";

const Input = props => {
    const { value, onChange, name, label } = props;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
                placeholder={`Enter ${label}`}
            />
        </div>
    );
};

export default Input;
