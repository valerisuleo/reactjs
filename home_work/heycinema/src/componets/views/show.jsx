import http from "../../services/httpService";
import config from "../../config.json";
import React, { useState, useEffect, Fragment } from "react";
import BoorstrapCard from "../../shared/reusable-components/BootstrapCard";

const Show = (props) => {
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const { id } = props.match.params;
        const url = `${config.omdbAPI}?i=${id}&apikey=${config.keyAPI}`;
        const movie = await http.get(url);
        setMovie(movie.data);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <Fragment>
            {movie ? (
                <div className="row p-5">
                    <div className="col animated flipInX">
                        <BoorstrapCard
                            title={movie.Title}
                            subTitle={movie.Year}
                            image={movie.Poster}
                            body={movie.Plot}
                            footer={movie.Runtime}
                        ></BoorstrapCard>
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
};

export default Show;
