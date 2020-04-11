import React, { Component, Fragment } from "react";
import "./about.scss";
import * as http from "../../../services/aboutService";
import highChartBarOptions from "./highChartBarOptions";

import BootstrapJumbotron from "../../common/bootstrap-jumbotron/bootstrapJumbotron";
import ExperienceCard from "./card-partials/experinceCard";
import EducationCard from "./card-partials/educationCard";
import BarSkillsCard from "./card-partials/barCard";
import Footer from '../../footer/footer';

let lastScrollY = 0;

class About extends Component {
    state = {
        experience: [],
        education: [],
        isVisible: false,
        waitForit: false,
        options: highChartBarOptions(),
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        const response = http.getExpericencesAndEducation();
        const { experience, education } = response;
        this.setState({ experience, education });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      };

    refOffSet = React.createRef();

    handleScroll = () => {
        lastScrollY = window.scrollY;
        const { offsetTop } = this.refOffSet.current;
        if (lastScrollY >= offsetTop) {
            setTimeout(() => {
                this.setState({ isVisible: true });
            }, 500);
            setTimeout(() => {
                this.setState({ waitForit: true });
            }, 3000);
        }
    };

    setPath(string) {
        let path = `${string.replace(/\s/g, "").toLowerCase()}`;

        if (path.includes("à")) {
            path = path.replace("à", "a");
        }
        return path;
    }

    render() {
        const {
            experience,
            education,
            isVisible,
            options,
            waitForit,
        } = this.state;

        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-10">
                        <BootstrapJumbotron></BootstrapJumbotron>
                        <div className="personal-brand">
                            <h4 className="mb-4">Valerio Risuleo</h4>
                            <p className="mb-0">Full Stack Developer</p>
                            <p>London, United Kingdom</p>
                            <hr />
                            <p className="mb-5">
                                “kinda smart, kinda geeky, kinda nerd,
                                hysterically funny Web Developer who you would
                                like to have in your team”
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-secondary mb-5">
                            <p className="p-3">
                                "Valerio is hardworking and super keen. He puts
                                in the effort and hours to learn new and tricky
                                aspects of programming, and always pushes
                                forward. He's a lot of fun to work with and a
                                great personality to have in any team." - Ben
                                Fox, Front End Team Lead @ appScatter.
                            </p>
                        </div>
                        
                        <h4>Experiences</h4>
                        {experience.map((item, i) => (
                            <ExperienceCard
                                key={i}
                                item={item}
                                path={this.setPath(item.company)}
                                directory="about"
                            ></ExperienceCard>
                        ))}

                        <div ref={this.refOffSet}>
                            {isVisible ? (
                                <Fragment>
                                    <h4>Skills</h4>
                                    <BarSkillsCard
                                    options={options}
                                    waitForit={waitForit}
                                />
                                </Fragment>
                            ) : null}
                        </div>

                        <h4>Education</h4>
                        {education.map((item, i) => (
                            <EducationCard
                                key={i}
                                directory="about"
                                path={this.setPath(item.nameInstitute)}
                                item={item}
                            ></EducationCard>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
