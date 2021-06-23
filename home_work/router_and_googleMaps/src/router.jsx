import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Wonders from './components/views/wonders/index/wonders';
import WonderShow from './components/views/wonders/show/wonderShow';


class UIRouter extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/wonders/:id" component={WonderShow}></Route>
                    <Route path="/wonders" component={Wonders}></Route>
                    <Redirect to="/wonders"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default UIRouter;