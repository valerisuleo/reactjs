import React, { Component, Fragment } from "react";
import "./contact.scss";

class Contact extends Component {
    state = {
        isFlipped: false,
    };

    handleMouseOver = () => {
        this.setState({ isFlipped: true });
    };

    handleMouseOut = () => {
        this.setState({ isFlipped: false });
    };

    render() {
        const { isFlipped } = this.state;

        return (
            <Fragment>
                <div className="contact-container">
                    <div
                        onMouseLeave={this.handleMouseOut}
                        className="business-card-container"
                    >
                        <div
                            onMouseOver={this.handleMouseOver}
                            className={
                                !isFlipped
                                    ? "business-card"
                                    : "business-card flipped"
                            }
                        >
                            <div className="front">
                                <span></span>
                            </div>
                            <div className="back">
                                <section>
                                    <div></div>
                                    <div>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div></div>
                                </section>
                                <aside>
                                    <p>Valerio Risuleo</p>
                                    <p>FullStack Developer</p>

                                    <p>
                                        <a href="https://github.com/valeriorisuleo">
                                            github/valeriorisuleo
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/valerio-risuleo/">
                                            linkedin/valerio-risuleo
                                        </a>
                                    </p>
                                    <p>www.valerisuleo.it</p>
                                    <p>
                                        <a href="tel:07930226925">
                                            +44 7930 22.69.25
                                        </a>
                                    </p>
                                    <p>
                                        <a href="tel:00393332520570">
                                            +39 333 25.20.570
                                        </a>
                                    </p>
                                    <p>
                                        <a href="mailto:valerio.risuleo@gmail.com">
                                            valerio.risuleo@gmail.com
                                        </a>
                                    </p>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Contact;
