import React, { Fragment } from "react";
import "./footer.scss";
import { useLocation } from "react-router-dom";

function Footer() {
    const { pathname } = useLocation();

    return (
        <Fragment>
            {pathname !== "/" ? (
                <div className="row mb-5 d-flex justify-content-center">
                    <div className="col-10">
                        <hr/>
                        <footer>
                            <p className="text-center">
                                Made with <span>&hearts;</span> and React.JS
                            </p>
                        </footer>
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
}

export default Footer;
