import React, { Component } from "react";
import "./contact.scss";

class Contact extends Component {
    state = {
        isFlipped: false,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getWindowDimensions() {
        const { innerWidth } = window;
        return innerWidth;
    }

    handleMouseOver = () => {
        this.setState({ isFlipped: true });
    };

    handleMouseOut = () => {
        const width = this.getWindowDimensions();
        if (width > 640) {
            this.setState({ isFlipped: false });
        }
    };

    render() {
        const { isFlipped } = this.state;
        let container = !isFlipped ? "container zero" : "container";
        let column = !isFlipped ? "col zero" : "col";

        return (
            <div className={container} id='contact'>
                <div className="row">
                    <div className={column}>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
