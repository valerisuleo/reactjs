import React from "react";

const BoorstrapCard = (props) => {
    const { title, subTitle, image, body, footer } = props;

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={image} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {subTitle}
                        </h6>
                        <p className="card-text">{body}</p>
                        <p className="card-text">
                            <small className="text-muted">{footer}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoorstrapCard;
