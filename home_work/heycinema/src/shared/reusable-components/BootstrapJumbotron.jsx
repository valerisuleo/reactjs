import React from "react";

const BootstrapJumbotron = (props) => {
    const { title, subtitle, animated } = props;
    return (
        <div className={`jumbotron jumbotron-fluid ${animated}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <h1 className="display-3">{title}</h1>
                        <p className="lead">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootstrapJumbotron;
