import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import useWindowScroll from "@react-hook/window-scroll";
import "./navMobile.scss";

const NavMobile = () => {
    const { pathname } = useLocation();
    const header = React.createRef();
    const scrollY = useWindowScroll(60 /*fps*/);
    let isOpen;

    const isScrolled = () => {
        let onScroll = false;

        if (scrollY > 0) {
            onScroll = true;
        }
        return onScroll;
    };

    const handleClick = () => {
        isOpen = !isOpen;
        const { current } = header;
        isOpen
            ? current.classList.add("show")
            : current.classList.remove("show");
    };

    return (
        <Fragment>
            {isScrolled() && pathname !== "/" ? (
                <header
                    onClick={handleClick}
                    ref={header}
                    className="nav-header d-lg-none animated fadeInDown"
                >
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            ) : null}
        </Fragment>
    );
};

export default NavMobile;
