import React from "react";

const Select = (prop) => {
    const {name, label, value, arrOptions, onChange} = prop;
    
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <select className="form-control" name={name} onChange={onChange} value={value}>
                {arrOptions.map((item, index) => <option key={index} value={item[name]}>
                    {item[name]}
                </option>)}
            </select>
        </div>
    );
};

export default Select;
