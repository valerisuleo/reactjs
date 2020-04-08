import React from "react";

const Input = prop => {
    const { onChange, value, name, title } = prop;
    return (
        <div className="form-group">
            <label htmlFor={name}></label>
            <input
                onChange={onChange}
                value={value}
                name={name}
                label={name}
                type="text"
                className="form-control"
            />
        </div>
    );
};

export default Input;
