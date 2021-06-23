import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SaberEdit from "./components/views/sabers/edit";
import SaberIndex from "./components/views/sabers/index/index";
import BootstrapNav from "./components/navbar/bootstrapNav";
import SaberShow from "./components/views/sabers/show";
import SaberNew from "./components/views/sabers/new";

class UIRouter extends Component {
    render() {
        return (
            <Fragment>
                <BootstrapNav></BootstrapNav>
                <main className="container">
                    <Switch>
                        <Route
                            path="/sabers/:id/edit"
                            exact
                            component={SaberEdit}
                        ></Route>
                        <Route path="/sabers/:id" component={SaberShow}></Route>
                        <Route path="/new" component={SaberNew}></Route>
                        <Route path="/sabers" component={SaberIndex}></Route>
                        <Redirect to="/sabers"></Redirect>
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

export default UIRouter;
