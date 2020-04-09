import React, { Component, Fragment } from "react";
import "./home.scss";
import "./animate.scss";
import Circle from "./circle";

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
    };

    handleClick = (e) => {
        this.addClassOpen();
    };

    handleMouseOver = (e) => {
        const current = e;
        console.log('current', current);

        current.isActive = true;

        const circles = [...this.state.circles];
        let index = circles.indexOf(current);
        circles[index] = current;

        this.setState({ circles });
    };

    handleMouseOut = () => {
        const circles = [...this.state.circles];
        circles.forEach((item) => {
            item.isActive = false;
        });
        this.setState({ circles });
    };

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
        const { circles } = this.state;

        return (
            <React.Fragment>
                {circles.map((item, i) => (
                    <Circle
                        key={i}
                        circle={item}
                        className={this.classesDynamic(item)}
                        onClick={this.handleClick}
                        onMouseEnter={() => this.handleMouseOver(item)}
                        onMouseLeave={this.handleMouseOut}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Home;
