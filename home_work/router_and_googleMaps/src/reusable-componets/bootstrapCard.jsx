import React from "react";

const BootstrapCard = (props) => {
    const { cardImage, cardTitle, cardTxt } = props;

    return (
        <div className="card bg-dark text-white mb-5">
            <img
                src={cardImage}
                className="card-img"
                style={{ maxHeight: "350px" }}
                alt="..."
            />
            <div className="card-img-overlay">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardTxt}</p>
            </div>
        </div>
    );
};

export default BootstrapCard;
