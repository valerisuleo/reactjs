import React from "react";

const BootstrapInput = (props) => {
    const { name, label, value, onChange, type, placeholder } = props;
    console.log(props);
    

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                className="form-control"
                placeholder={placeholder}
                autoComplete="off"
            />
        </div>
    );
};

export default BootstrapInput;
