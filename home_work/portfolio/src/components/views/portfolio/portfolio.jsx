import React, { Component } from "react";
import * as http from "../../../services/porfolioService";
import ProjectsCard from './projectsCard'

class Portfolio extends Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        const response = http.getProjects();        
        this.setState({ projects: response });
    }

    render() {
        const { projects } = this.state;

        return (
            <div className='container mt-5'>
                <div className="row">
                <div className="col">
                    {projects.map((item, i) => (
                        <ProjectsCard
                            key={i}
                            cardTitle={item.title}
                            cardText={item.body}
                            imgName={item.path}
                            github={item.github}
                            directory="projects"
                        ></ProjectsCard>
                    ))}
                </div>
            </div>
            </div>
        );
    }
}

export default Portfolio;
