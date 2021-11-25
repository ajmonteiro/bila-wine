import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Admin from "../Admin/Locations/Index";
import Index from "../Auth/Index";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Cart from "../Cart/Index";
import Chat from "../Chat/Chat";
import NotFound from "../Layout/NotFound";
import OrderDetail from "../Order/Detail";
import ProductId from "../Product/Index";
import StartApp from "../StartApp";

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/auth" component={Index} />
                    <Route exact path="/" component={StartApp} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/product/:id" component={ProductId} />
                    <Route exact path="/order/:id" component={OrderDetail} />

                    <Route path="*" exact={true} component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
