import React from "react";
import _ from "lodash";

const BootstrapInput = (props) => {
    const { name, label, onChange, errors, value } = props;
    const isEmpty = _.isEmpty(errors);

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                type="text"
                className="form-control"
                style={{ border: '1px solid red'}}
            />

            {!isEmpty ? (
                <div className="alert alert-danger" role="alert" style={{color: 'red'}}>
                    {errors}
                </div>
            ) : null}
        </div>
    );
};

export default BootstrapInput;
