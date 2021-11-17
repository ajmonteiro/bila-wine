import React from "react";
import api from "../Data/Api";
import { Div, Content, Link, Paragraph, Image } from "./Layout";
import { getToken } from "../Data/Auth";
import { Route, Switch, useHistory } from "react-router";
import { logout } from "../Data/Auth";
import Index from "../Admin/Index";
import Header from "./Header";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HomePage from "../Home/HomePage";
import { CartIcon, ProfileIcon } from "./Icons";

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
            <Div className="flex flex-wrap place-items-center">
                <Div className="relative mx-auto">
                    <Div className="flex justify-between bg-gray-900 text-white w-screen">
                        <Div className="px-5 xl:px-12 py-6 flex w-full items-center">
                            <Link
                                className="text-3xl font-bold font-heading"
                                path="#"
                            >
                                <Image
                                    className="h-9"
                                    path="logo.png"
                                    alt="logo"
                                />
                            </Link>
                            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li>
                                    <Link
                                        className="hover:text-gray-200"
                                        path="/"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-gray-200"
                                        path="/admin"
                                    >
                                        ADMIN
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-gray-200"
                                        path="/chat"
                                    >
                                        LIVE CHAT
                                    </Link>
                                </li>
                            </ul>
                            <Div className="hidden xl:flex items-center space-x-5 items-center">
                                <Link
                                    className="hover:text-gray-200"
                                    path="#"
                                ></Link>
                                <a
                                    className="flex items-center hover:text-gray-200"
                                    href="/cart"
                                >
                                    <CartIcon />
                                </a>
                                <a
                                    className="flex items-center hover:text-gray-200"
                                    href="#"
                                >
                                   <ProfileIcon />
                                </a>
                            </Div>
                        </Div>
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
