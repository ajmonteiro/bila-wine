import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Image, Link, Paragraph, Title } from "../Layout/Layout";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
                    <Title
                        className="text-2xl font-extrabold mt-5 tracking-tight text-gray-900"
                        title={"À procura de eventos?"}
                    />
                    <Div className="max-w-2xl mx-auto py-16 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
                        <Splide
                            options={{
                                rewind: true,
                                autoplay: true,
                                type: "loop",
                                perPage: 3,
                                perMove: 1,
                                arrows: false,
                            }}
                        >
                            {events?.map(
                                (item: any) => (
                                    <SplideSlide>
                                        <div
                                            key={item.id}
                                            className="m-3 cursor-pointer"
                                        >
                                            <div
                                                className="product-image"
                                                onClick={() =>
                                                    window.open(
                                                        `/produto/${item.id}`,
                                                        `_self`
                                                    )
                                                }
                                                style={{
                                                    backgroundImage:
                                                        `url(` +
                                                        (baseURL() +
                                                            item.image) +
                                                        `)`,
                                                    backgroundPosition:
                                                        "center",
                                                    backgroundSize: "cover",
                                                    width: "100%",
                                                    height: "200px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            ></div>
                                            <Div className="product-text">
                                                <Div className="product-title">
                                                    {item.title}
                                                </Div>
                                                <Div className="product-description">
                                                    {item.description}
                                                </Div>
                                                <Div className="product-price">
                                                    €{item.price}
                                                </Div>
                                            </Div>
                                        </div>
                                    </SplideSlide>
                                )
                            )}
                        </Splide>
                    </Div>
                </Div>
            )}
        </>
    );
}
