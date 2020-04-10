import React, { Component } from "react";
import BootstrapCard from "../../common/bootstrap-card/bootstrapCard";
import "./about.scss";

class EducationCard extends Component {
    
    // renderAside() {
    //     const { directory, path } = this.props;

    //     return (
    //         <div className="logo-frame">
    //             <img
    //                 src={require(`../../../images/${directory}/${path}.jpg`)}
    //                 className="card-img"
    //             />
    //         </div>
    //     );
    // }

    renderSection() {
        

        return (
            <div className="card-body">
                {/* <h1 className="card-title">{title}</h1>
                <p className="card-text">{company}</p>
                <p className="card-text">{timeWindow}</p>
                <p className="card-text">{where}</p>
                <p className="card-text">{description}</p> */}
                <hr />
            </div>
        );
    }

    render() {
        console.log(this.props);
        
        return (
            <BootstrapCard
                // asideContent={this.renderAside()}
                // sectionContent={this.renderSection()}
            />
        );
    }
}

export default EducationCard;
