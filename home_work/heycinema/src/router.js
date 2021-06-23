import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./componets/views";
import Show from "./componets/views/show";

const UIRouter = () => {
    return (
        <Fragment>
            <main className="container">
                <Switch>
                    <Route
                        path="/movies/:id"
                        render={(props) => <Show {...props} />}
                    ></Route>
                    <Route path="/movies" component={Index}></Route>
                    <Route exact path="/" component={Index}></Route>
                </Switch>
            </main>
        </Fragment>
    );
};

export default UIRouter;
