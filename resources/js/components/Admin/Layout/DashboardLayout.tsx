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
    Image,
    Title,
    Button,
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
                                    <Button
                                        className="hover:text-gray-200"
                                        onclick={(e) => setvisible('cellar')} text={"ADEGAS"} />
                                </li>
                                <li>
                                <Button
                                        className="hover:text-gray-200"
                                        onclick={(e) => setvisible('location')} text={"LOCALIZAÇÕES"} />
                                </li>
                                <li>
                                <Button
                                        className="hover:text-gray-200"
                                        onclick={(e) => setvisible('event')} text={"EVENTOS"} />
                                </li>
                                <li>
                                <Button
                                        className="hover:text-gray-200"
                                        onclick={(e) => setvisible('product')} text={"PRODUTOS"} />
                                </li>
                                <li>
                                <Button
                                        className="hover:text-gray-200"
                                        onclick={(e) => setvisible('category')} text={"CATEGORIAS"} />
                                </li>
                            </ul>
                        </Div>
                    </Div>
                </Div>
            </Div>
                {visible == "location" && <LocationPage />}
                {visible == "cellar" && <CellarPage />}
                {visible == "event" && <EventPage />}
                {visible == "product" && <ProductPage />}
                {visible == "category" && <CategoryPage />}

          
        </>
    );
}
