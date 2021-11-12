import React, { useState } from "react";
import { Route, Switch } from "react-router";
import {
    AddIcon,
    ClientIcon,
    HomeIcon,
    ListIcon,
    TrashIcon,
} from "../../Layout/Icons";
import {
    AdminMenuItem,
    Content,
    Div,
    Link,
    Paragraph,
    Title,
} from "../../Layout/Layout";
import { CategoryPage } from "../Categories/Index";
import { CellarPage } from "../Cellars/Index";
import { EventPage } from "../Events/Index";
import { LocationPage } from "../Locations/Index";
import { ProductPage } from "../Products/Index";

export default function DashboardLayout() {
    const [visible, setvisible] = useState<string>("cellar");
    return (
        <>
            <Div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <Div className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-100">
                    <Div className="sidebar-header flex items-center justify-center py-4">
                        <Div className="inline-flex">
                            <Paragraph
                                className="leading-10 text-gray-900 text-2xl font-bold ml-1 uppercase"
                                text="BILAWINE"
                            />
                        </Div>
                    </Div>
                    <Div className="sidebar-content px-4 py-6">
                        <ul className="flex flex-col w-full">
                            <li className="my-px">
                                <a
                                    href="#"
                                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                                >
                                    <HomeIcon />
                                    <AdminMenuItem
                                        className="ml-3"
                                        text="Dashboard"
                                    />
                                </a>
                            </li>
                            <li className="my-px">
                                <Link
                                    path="#"
                                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-900"
                                    onclick={() => setvisible("cellar")}
                                >
                                    <ClientIcon />
                                    <AdminMenuItem
                                        className="ml-3"
                                        text="Cellars"
                                    />
                                </Link>
                            </li>
                            <li className="my-px">
                                <Link
                                    path="#"
                                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-900"
                                    onclick={() => setvisible("location")}
                                >
                                    <ClientIcon />
                                    <AdminMenuItem
                                        className="ml-3"
                                        text="Locations"
                                    />
                                </Link>
                            </li>
                            <li className="my-px">
                                <Link
                                    path="#"
                                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-900"
                                    onclick={() => setvisible("product")}
                                >
                                    <ClientIcon />
                                    <AdminMenuItem
                                        className="ml-3"
                                        text="Products"
                                    />
                                </Link>
                            </li>
                            <li className="my-px">
                                <Link
                                    path="#"
                                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-900"
                                    onclick={() => setvisible("category")}
                                >
                                    <ClientIcon />
                                    <AdminMenuItem
                                        className="ml-3"
                                        text="Categories"
                                    />
                                </Link>
                            </li>
                            <li className="my-px">
                                <Link
                                    path="#"
                                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-900"
                                    onclick={() => setvisible("event")}
                                >
                                    <ClientIcon />
                                    <AdminMenuItem
                                        className="ml-3"
                                        text="Events"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </Div>
                </Div>
                <Div className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <Div className="header bg-white shadow py-4 px-4">
                        <Div className="header-content flex items-center flex-row">
                            <Div className="flex ml-auto">
                                <Link
                                    className="flex flex-row items-center"
                                    path=""
                                >
                                    <img
                                        src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                                        className="h-10 w-10 bg-gray-200 border rounded-full"
                                    />
                                    <span className="flex flex-col ml-2">
                                        <Paragraph
                                            className="truncate w-20 font-semibold tracking-wide leading-none"
                                            text="Américo"
                                        />
                                        <Paragraph
                                            className="truncate w-20 text-gray-500 text-xs leading-none mt-1"
                                            text="Monteiro"
                                        />
                                    </span>
                                </Link>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="main-content flex flex-col flex-grow p-4">
                        {visible == "location" && <LocationPage />}
                        {visible == "cellar" && <CellarPage />}
                        {visible == "event" && <EventPage />}
                        {visible == "product" && <ProductPage />}
                        {visible == "category" && <CategoryPage />}
                    </Div>
                    <Div className="footer px-4 py-6">
                        <Div className="footer-content">
                            <Paragraph
                                className="text-sm text-gray-600 text-center"
                                text="© BilaWine 2021/2022"
                            />
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
