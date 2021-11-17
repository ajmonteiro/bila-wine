import React from "react";
import { baseURL } from "../Data/Api";
import Header from "../Layout/Header";
import { Div, Title, Image } from "../Layout/Layout";
import Events from "./Events";
import Phrase from "./Phrase";
import Products from "./Products";

export default function HomePage() {
    return (
        <>
            <Header />
            <Div className="flex mt-20 justify-center text-center">
                <Div className="row-auto w-2/3 m-10 flex justify-center text-center">
                    <Phrase />
                </Div>
            </Div>
            <Div className="flex mt-10 justify-center text-center">
                <Title className="text-2xl font-thin" title="ENOTURISMO"/>
            </Div>
            <Div className="flex mt-10 justify-center text-center">
                <Image path={baseURL() + '/storage/event-background.jpg'}/>
            </Div>
            <Div className="flex mt-10 justify-center text-center">
                <Events />
            </Div>
            <Div className="mt-10">
                <Products />
            </Div>
        </>
    );
}
