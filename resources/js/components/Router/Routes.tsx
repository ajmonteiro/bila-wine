import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import DashboardLayout from "../Admin/Layout/DashboardLayout";
import Index from "../Auth/Index";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Cart from "../Cart/Index";
import NotFound from "../Layout/NotFound";
import OrderDetail from "../Order/Detail";
import SuccessPay from "../Order/Success";
import ProductId from "../Product/Index";
import StartApp from "../StartApp";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { AxiosResponse } from "axios";
import Products from "../Products/Index";
import Events from "../Events/Index";
import Gifts from "../Gifts/Index";
import Contacts from "../Contacts/Index";
import User from "../User/Index";
import Faqs from "../Faqs/Index";
import EventId from "../Event/Index";
import ActivateEmail from "../Email/ActivateEmail";
import About from "../About/Index";
import SiteMap from "../SiteMap/Index";

export default function Routes() {
    const [hasAdminRole, setHasAdminRole] = useState<any>();

    useEffect(() => {
        getRoleFromAuth();
    }, []);

    function getRoleFromAuth() {
        api.get(`/api/role`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }).then((res: AxiosResponse<any>) => {
            setHasAdminRole(res.data.role);
        });
    }

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/auth" component={Index} />
                    <Route exact path="/" component={StartApp} />
                    <Route exact path="/admin">
                        {hasAdminRole && hasAdminRole != "Admin" && (
                            <Redirect to={"/"} />
                        )}
                        {hasAdminRole && hasAdminRole == "Admin" && (
                            <DashboardLayout />
                        )}
                    </Route>
                    <Route exact path="/sobre-bilawine" component={About} />
                    <Route exact path="/carrinho" component={Cart} />
                    <Route exact path="/produto/:id" component={ProductId} />
                    <Route exact path="/evento/:id" component={EventId} />
                    <Route exact path="/order/:id" component={OrderDetail} />
                    <Route
                        exact
                        path="/order/success/:id"
                        component={SuccessPay}
                    />
                    <Route exact path="/produtos" component={Products} />
                    <Route exact path="/eventos" component={Events} />
                    <Route exact path="/presentes" component={Gifts} />
                    <Route exact path="/contactos" component={Contacts} />
                    <Route exact path="/utilizador" component={User} />
                    <Route exact path="/faqs" component={Faqs} />
                    <Route exact path="/mapa-do-site" component={SiteMap} />
                    <Route
                        exact
                        path="/ativar/email/:id"
                        component={ActivateEmail}
                    />

                    <Route path="*" exact={true} component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
