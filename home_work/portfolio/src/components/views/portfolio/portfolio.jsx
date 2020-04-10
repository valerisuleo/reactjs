import React, { Component } from "react";
import * as http from "../../../services/porfolioService";
import "./portfolio.scss";
import ProjectsCard from './projectsCard'

class Portfolio extends Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        const response = http.getProjects();
        this.setState({ projects: response });
    }

    render() {
        const { projects } = this.state;

        return (
            <div className="row wrapper">
                <div className="col">
                    {projects.map((item, i) => (
                        <ProjectsCard
                            key={i}
                            cardTitle={item.title}
                            cardText={item.body}
                            imgName={item.path}
                            directory="projects"
                        ></ProjectsCard>
                    ))}
                </div>
            </div>
        );
    }
}

export default Portfolio;
