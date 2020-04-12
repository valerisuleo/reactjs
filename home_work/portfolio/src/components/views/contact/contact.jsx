import React, { Component, Fragment } from "react";
import "./contact.scss";

class Contact extends Component {
    state = {
        isFlipped: false,
    };

    htmlElement = React.createRef();

    handleClick = () => {
        const parentElement = this.htmlElement.current;

        parentElement.classList.add('flipped')

        this.setState({ isFlipped: true });
    };

    render() {
        const { isFlipped } = this.state;

        return (
            <Fragment>
                <button className="btn btn-primary" onClick={this.handleClick}>
                    FlipMe
                </button>
                <div className="maincontainer">
                    <div className="business-card-container">
                        <div ref={this.htmlElement} className="business-card">
                            <div className="front">front</div>
                            <div className="back">Back</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Contact;
