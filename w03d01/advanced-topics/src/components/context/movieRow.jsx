import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
    const currentUser = useContext(UserContext);
    const name = currentUser.currentUser;

    return <div>{name ? name : ""}</div>;
}

export default MovieRow;
