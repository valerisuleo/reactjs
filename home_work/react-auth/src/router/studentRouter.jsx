import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/views/auth/login";
import Register from "../components/views/auth/register";
import BootstrapNavbar from "../components/bootstrap-navbar/navbar";
import StudentsIndex from "../components/views";
import StudentShow from "../components/views/show";
import StudentNew from "../components/views/new";

class StudentRouter extends Component {
    render() {
        return (
            <Fragment>
                <BootstrapNavbar></BootstrapNavbar>
                <main className="container">
                    <Switch>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route
                            path="/students/new"
                            component={StudentNew}
                        ></Route>
                        <Route
                            path="/students/:id"
                            component={StudentShow}
                        ></Route>
                        <Route
                            path="/students"
                            component={StudentsIndex}
                        ></Route>
                        <Redirect to="/students"></Redirect>
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

export default StudentRouter;
