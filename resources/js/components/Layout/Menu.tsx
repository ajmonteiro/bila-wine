import React from "react";
import api from "../Data/Api";
import { Div, Content, Link, Paragraph, Image } from "./Layout";
import { getToken } from "../Data/Auth";
import { Route, Switch, useHistory } from "react-router";
import { logout } from "../Data/Auth";
import Header from "./Header";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HomePage from "../Home/HomePage";
import { CartIcon, ProfileIcon } from "./Icons";
import DashboardLayout from "../Admin/Layout/DashboardLayout";
import Navbar from "./Navbar/Navbar";
import Products from "../Products/Index";
import Events from "../Events/Index";
import Gifts from "../Gifts/Index";

export default function TopMenu() {
    const history = useHistory();

    function goLogout(e: any) {
        e.preventDefault();
        api.post(`/api/logout`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            logout();
            history.push("/auth", console.log(res));
        });
    }
    return (
        <>
            <Div>
                <Navbar />
            </Div>
            <Content>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    {/* <Route exact path="/produtos" component={Products} />
                    <Route exact path="/eventos" component={Events} />
                    <Route exact path="/presentes" component={Gifts} /> */}
                    <Route exact path="/admin" component={DashboardLayout} />
                </Switch>
            </Content>
        </>
    );
}
