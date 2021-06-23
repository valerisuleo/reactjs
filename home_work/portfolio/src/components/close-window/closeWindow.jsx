import React, { Fragment } from "react";
import "./closeWindow.scss";
import { Link, useLocation } from "react-router-dom";

function CloseWindow() {
    const { pathname } = useLocation();

    return (
        <Fragment>
            {pathname !== "/" ? (
                <Link to="/" id="burger">
                    <div className="burger-menu"></div>
                </Link>
            ) : null}
        </Fragment>
    );
}

export default CloseWindow;
