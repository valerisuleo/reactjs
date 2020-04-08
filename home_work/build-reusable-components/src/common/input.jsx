import React from "react";

const Input = prop => {
    const { name, value, onChange, label } = prop;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
                type="text"
            />
        </div>
    );
};

export default Input;
