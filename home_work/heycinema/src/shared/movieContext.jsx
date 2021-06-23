import React from "react";

const MovieContext = React.createContext({ Search: [], setMovie: () => {} });
MovieContext.displayName = "MovieContext";

export default MovieContext;
