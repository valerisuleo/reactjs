import React from "react";

const Select = props => {
    const { value, onChange, name, arrayOfOptions, label } = props;
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                value={value}
                onChange={onChange}
                className="form-control"
                name={name}
            >
                {arrayOfOptions.map(genre => (
                    <option key={genre.id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
