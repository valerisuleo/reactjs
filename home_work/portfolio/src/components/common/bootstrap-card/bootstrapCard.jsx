import React from "react";
import "./bootstrapCard.scss";

function BootstrapCard(props) {
    const { asideContent, sectionContent } = props;

    return (
        <div className="card">
            <div className="row no-gutters mb-5">
                <aside className="col-xl-4 col-lg-6">{asideContent}</aside>
                <section className="col-xl-8 col-lg-6">{sectionContent}</section>
            </div>
        </div>
    );
}

export default BootstrapCard;
