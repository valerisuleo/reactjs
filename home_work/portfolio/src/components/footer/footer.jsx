import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./footer.scss";

function Footer() {
    const { pathname } = useLocation();

    return (
        <Fragment>
            {pathname !== "/" ? (
                <div
                    className="row mb-5 d-flex justify-content-center"
                    id="footy"
                >
                    <div className="col-10">
                        <hr />
                        <footer>
                            <p className="text-center">
                                Made with <span>&hearts;</span>
                                <strong>&</strong>React
                            </p>
                        </footer>
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
}

export default Footer;
