import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// components
import Home from "./components/home";
import BootstrapNavbar from "./components/bsNavbar";
import Products from "./components/products";
import ShoppingCart from "./components/shoppingCart";
import CheckOut from "./components/checkOut";
import OrderSuccess from "./components/orderSuccess";
import AdminOrders from "./components/admin/orders";
import AdminProducts from "./components/admin/products";
import Login from "./components/login";

class UIRouter extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <BootstrapNavbar />
                    <main className='container'>
                        <Switch>
                            {/* admin */}
                            <Route path="/admin/products" component={AdminProducts} />
                            <Route path="/admin/orders" component={AdminOrders} />
                            {/* user */}
                            <Route path="/order-success" component={OrderSuccess} />
                            <Route path="/check-out" component={CheckOut} />
                            <Route path="/shopping-cart" component={ShoppingCart} />
                            <Route path="/products" component={Products} />
                            {/* common */}
                            <Route path="/login" component={Login} />
                            <Route path="/home" component={Home} />
                            <Redirect to='/home' />
                        </Switch>
                    </main>
                </Fragment>
            </div>
        );
    }
}

export default UIRouter;
