import React, { Component } from "react";
import Circle from "./circle";
import "./home.scss";
import soundClick from "../../../sounds/click.wav";
import soundCursor from "../../../sounds/cursor.wav";
import soundHeartBeat from "../../../sounds/beat.mp3";

class Home extends Component {
    state = {
        circles: [
            {
                color: "grey",
                isOpen: false,
                isActive: false,
                label: "About",
            },
            {
                color: "black",
                isOpen: false,
                isActive: false,
                label: "Portfolio",
            },

            {
                color: "silver",
                isOpen: false,
                isActive: false,
                label: "Contact",
            },
        ],
        isTransitionEnd: false,
        isMobile: false,
        audioFx: null,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.getInnerWidth);
        this.getInnerWidth();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.getInnerWidth);
    }

    getInnerWidth = () => {
        const { innerWidth } = window;
        if (innerWidth <= 770) {
            this.setState({ isMobile: true});
        }
    };

    handleClick = (e) => {
        const current = e;
        const { audioFx,isMobile } = this.state;

        if (!current.isOpen && !isMobile) {
            this.playFx(soundClick);
        }
        current.isActive = false;
        this.addClassOpen();
        this.waitForTransitionEnd();

        if (current.isOpen && !isMobile) {
            audioFx.pause();
        }
    };

    handleMouseOver = (e) => {
        const current = e;
        const { isTransitionEnd, isMobile } = this.state;

        if (!current.isOpen && !isMobile) {
            this.playFx(soundHeartBeat);
        }

        current.isActive = true;

        const circles = [...this.state.circles];
        let index = circles.indexOf(current);
        circles[index] = current;

        if (current.isOpen && current.isActive && !isMobile) {
            this.playFx(soundCursor);
        }

        if (isTransitionEnd && !isMobile) {
            this.playFx(soundHeartBeat);
        }
        this.setState({ circles });
    };

    handleMouseOut = (e) => {
        const current = e;
        current.isActive = false;
        const { audioFx, isMobile } = this.state;
        const circles = [...this.state.circles];

        let index = circles.indexOf(current);
        circles[index] = current;

        if (!isMobile) {
            audioFx.pause();
        }

        this.setState({ circles });
    };

    waitForTransitionEnd() {
        const { audioFx, isMobile } = this.state;
        const circleBlack = document.getElementsByClassName("circle")[1];
        circleBlack.addEventListener("webkitTransitionEnd", () => {
            this.setState({ isTransitionEnd: true });
            if (!isMobile) {
                audioFx.pause();
            }
        });
    }

    playFx(audioFile) {
        const audio = new Audio(audioFile);
        if (audio !== undefined) {
            this.setState({ audioFx: audio });
            audio.play();
        }
    }

    addClassOpen() {
        const circles = [...this.state.circles];
        circles.forEach((item) => {
            item.isOpen = true;
        });
        this.setState({ circles });
    }

    classesDynamic(item) {
        let classes = `circle ${item.color} `;

        if (item.isOpen) {
            classes += "open ";
        }

        if (item.isActive) {
            classes += "heart";
        }
        return classes;
    }

    render() {
        const { circles, isTransitionEnd } = this.state;
        
        return (
            <React.Fragment>
                {circles.map((item, i) => (
                    <Circle
                        key={i}
                        circle={item}
                        isTransitionEnd={isTransitionEnd}
                        className={this.classesDynamic(item)}
                        onClick={() => this.handleClick(item)}
                        onMouseEnter={() => this.handleMouseOver(item)}
                        onMouseLeave={() => this.handleMouseOut(item)}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Home;
