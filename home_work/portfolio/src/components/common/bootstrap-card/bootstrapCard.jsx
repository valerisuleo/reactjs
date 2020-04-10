import React from "react";
import "./bootstrapCard.scss";

function BootstrapCard(props) {
    const { asideContent, sectionContent } = props;

    return (
        <div className="card">
            <div className="row no-gutters">
                <aside className="col-md-4">{asideContent}</aside>
                <section className="col-md-8">{sectionContent}</section>
            </div>
        </div>
    );
}

export default BootstrapCard;
