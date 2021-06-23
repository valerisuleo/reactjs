import React, { useContext, Component } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../shared/movieContext";
import BoorstrapCard from "../../shared/reusable-components/BootstrapCard";
import "./index.scss";
import BootstrapJumbotron from "../../shared/reusable-components/BootstrapJumbotron";

const Index = () => {
    const { Search } = useContext(MovieContext);
    return (
        <React.Fragment>
            {Search.length > 0 ? (
                <div className="row p-5">
                    {Search.map((movie) => (
                        <div
                            key={movie.imdbID}
                            className="col-md-6 col-lg-4 animated fadeIn"
                        >
                            <Link to={`/movies/${movie.imdbID}`}>
                                <BoorstrapCard
                                    title={movie.Title}
                                    subTitle={movie.Year}
                                    image={movie.Poster}
                                    body={""}
                                    footer={""}
                                ></BoorstrapCard>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <BootstrapJumbotron
                    animated={"animated fadeInUp"}
                    title={"hey cinema"}
                    subtitle={"All the movies you love"}
                ></BootstrapJumbotron>
            )}
        </React.Fragment>
    );
};

export default Index;
