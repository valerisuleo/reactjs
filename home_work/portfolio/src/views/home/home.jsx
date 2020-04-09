import React, { Component } from "react";
import "./home.scss";
import soundClick from "../../sounds/click.wav";
import soundCursor from "../../sounds/cursor.wav";
import soundHeartBeat from "../../sounds/beat.mp3";

import Circle from "./circle";

class Home extends Component {
    state = {
        circles: [
            {
                color: "grey",
                isOpen: true,
                isActive: false,
                label: "About",
            },
            {
                color: "black",
                isOpen: true,
                isActive: false,
                label: "Portfolio",
            },

            {
                color: "silver",
                isOpen: true,
                isActive: false,
                label: "Contact",
            },
        ],
        isTransitionEnd: false,
        audioFx: null,
    };

    handleClick = (e) => {
        const current = e;
        if (!current.isOpen) {
            this.playFx(soundClick);
        }
        this.addClassOpen();
        this.waitForTransitionEnd();
    };

    handleMouseOver = (e) => {
        const current = e;
        current.isActive = true;

        const circles = [...this.state.circles];
        let index = circles.indexOf(current);
        circles[index] = current;

        
        
        // if (current.isOpen && current.isActive) {
            //     this.playFx(soundCursor);
            // }
            
            this.setState({ circles });
            this.playFx(soundHeartBeat);
    };

    handleMouseOut = (e) => {
        const current = e;
        current.isActive = false;
        const { audioFx } = this.state;
        const circles = [...this.state.circles];

        let index = circles.indexOf(current);
        circles[index] = current;


        audioFx.pause();
        
        this.setState({ circles })
    }

    waitForTransitionEnd() {
        const circleBlack = document.getElementsByClassName("circle")[1];
        circleBlack.addEventListener("webkitTransitionEnd", () => {
            this.setState({ isTransitionEnd: true });
        });
    }

    playFx = (audioFile) => {
        const audio = new Audio(audioFile);
        if (audio !== undefined) {
            this.setState({ audioFx: audio})
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
                        onMouseLeave={()=> this.handleMouseOut(item)}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Home;
