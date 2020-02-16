import React from "react";

const MovieShow = ({ match, history }) => {
    return (
        <div>
            <h1>Movie Show {match.params.id} </h1>
            <button
                className="btn btn-primary"
                onClick={() => history.push("/movies")}
            >
                Save
            </button>
        </div>
    );
};

export default MovieShow;
