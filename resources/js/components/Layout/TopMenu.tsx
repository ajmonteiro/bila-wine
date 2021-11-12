import React from "react";
import api from "../Data/Api";
import { Div, Content, Link, Paragraph } from "./Layout";
import { getToken } from "../Data/Auth";
import { Route, Switch, useHistory } from "react-router";
import { logout } from "../Data/Auth";
import Index from "../Admin/Index";
import Header from "./Header";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HomePage from "../Home/HomePage";

export default function TopMenu() {
    const history = useHistory();

    function goLogout(e: any) {
        e.preventDefault()
        api.post(`/api/logout`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            logout();
            history.push("/auth", console.log(res));
        })
    }
    return (
        <>
            <Div className="bg-white shadow">
                <Div className="container px-6 py-3 mx-auto md:flex h-20 md:justify-between md:items-center">
                    <Div className="flex items-center justify-between">
                        <Div>
                            <Link
                                className="text-xl font-bold text-red-800
                                md:text-2xl hover:text-red-700 dark:hover:text-gray-300"
                                path="#"
                            >
                                BILAWINE
                            </Link>
                        </Div>
                    </Div>

                    <Div className="items-center md:flex">
                        <Div className="flex flex-col md:flex-row md:mx-6">
                            <Link path="/">INICIO</Link>
                            <Link path="">PAGINA1</Link>
                            <Link path="">MEU PERFIL</Link>
                            <Link path="/admin">ADMIN</Link>
                            <Link path="/chat">LIVE CHAT</Link>
                            <Link path="" onclick={(e: any) => goLogout(e)}>
                                LOGOUT
                            </Link>
                        </Div>

                        <Div className="flex justify-center md:block"></Div>
                    </Div>
                </Div>
            </Div>
            <Content>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/admin" component={Index} />
                </Switch>
            </Content>
        </>
    );
}
