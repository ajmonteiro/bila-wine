import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import {Button, Div, Image, Link, Paragraph, Title} from "../Layout/Layout";

export default function Events() {
    const [events, setevents] = useState<any>();
    useEffect(() => {
        getEvents();
    }, []);
    function getEvents() {
        api.get("/api/events", {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setevents(res.data.events);
        });
    }
    return (
        <>
            {events && (
                <Div>
                <Title className="text-2xl font-extrabold mt-5 tracking-tight text-gray-900"
                       title={"À procura de eventos?"} />
                <Div className="max-w-2xl mx-auto py-16 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {events?.map(
                            (item: {
                                id: any;
                                image: any;
                                title: any;
                                description: any;
                                price: any;
                            }) => (
                                <Div className="group relative" key={item.id}>
                                    <Div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img
                                            src={baseURL() + item.image}
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                    </Div>
                                    <Div className="mt-4 flex justify-center">
                                        <Div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href="#">
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-0"
                                                    ></span>
                                                    {item.title}
                                                </a>
                                            </h3>
                                        </Div>
                                    </Div>
                                </Div>
                            )
                        )}
                    </Div>
                </Div>
                </Div>
            )}
        </>
    );
}
