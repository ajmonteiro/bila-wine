import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Content, Div } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";
import Navbar from "../Layout/Navbar/Navbar";

export default function Events() {
    const [events, setEvents] = useState<any>();
    const [visiblePrices, setVisiblePrices] = useState<any>(true);
    const [categories, setCategories] = useState<any>();
    const [visiblePersonNumber, setVisiblePersonNumber] = useState<any>(true);

    useEffect(() => {
        getEvents();
    }, []);

    function getEvents() {
        api.get(`/api/events`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
            setEvents(res.data.events);
        });
    }

    function getEventsInPriceRange(
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        nr1: any,
        nr2: any
    ) {
        e.preventDefault();
        api.get(`/api/events/range/${nr1}/${nr2}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setEvents(res.data.events);
        });
    }

    function getEventsFromPersonNumber(
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        personNumber: any
    ) {
        e.preventDefault();
        api.get(`/api/events/personNumber/${personNumber}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setEvents(res.data.events);
        });
    }
    return (
        <>
            <Navbar />
            <Content>
                <Div className="products-page-wrapper">
                    <Div className="products-page">
                        <Div className="products-grid">
                            <Div className="products-filter">
                                <span className="filters-title">FILTROS</span>
                                <Div className="filters-products">
                                    <ul>
                                        <li
                                            className="list-title"
                                            onClick={() =>
                                                setVisiblePrices(!visiblePrices)
                                            }
                                        >
                                            {visiblePrices ? (
                                                <i className="las la-angle-up"></i>
                                            ) : (
                                                <i className="las la-angle-right"></i>
                                            )}
                                            <span>Preços</span>
                                        </li>
                                        {visiblePrices && (
                                            <>
                                                <li onClick={() => getEvents()}>
                                                    Todos
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsInPriceRange(
                                                            e,
                                                            "50",
                                                            "100"
                                                        )
                                                    }
                                                >
                                                    €50 - €100
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsInPriceRange(
                                                            e,
                                                            100,
                                                            200
                                                        )
                                                    }
                                                >
                                                    €100 - €200
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsInPriceRange(
                                                            e,
                                                            200,
                                                            500
                                                        )
                                                    }
                                                >
                                                    €200 - €500
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsInPriceRange(
                                                            e,
                                                            500,
                                                            1000
                                                        )
                                                    }
                                                >
                                                    €500 - €1000
                                                </li>
                                            </>
                                        )}
                                        <li
                                            className="list-title"
                                            onClick={() =>
                                                setVisiblePersonNumber(
                                                    !visiblePersonNumber
                                                )
                                            }
                                        >
                                            {visiblePersonNumber ? (
                                                <i className="las la-angle-up"></i>
                                            ) : (
                                                <i className="las la-angle-right"></i>
                                            )}
                                            <span>Número de pessoas</span>
                                        </li>
                                        {visiblePersonNumber && (
                                            <>
                                                <li
                                                    onClick={(e) => getEvents()}
                                                >
                                                    Todos
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsFromPersonNumber(
                                                            e,
                                                            2
                                                        )
                                                    }
                                                >
                                                    2 pessoas
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsFromPersonNumber(
                                                            e,
                                                            3
                                                        )
                                                    }
                                                >
                                                    3 pessoas
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsFromPersonNumber(
                                                            e,
                                                            4
                                                        )
                                                    }
                                                >
                                                    4 pessoas
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsFromPersonNumber(
                                                            e,
                                                            5
                                                        )
                                                    }
                                                >
                                                    5 pessoas
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsFromPersonNumber(
                                                            e,
                                                            6
                                                        )
                                                    }
                                                >
                                                    6 pessoas
                                                </li>
                                                <li
                                                    onClick={(e) =>
                                                        getEventsFromPersonNumber(
                                                            e,
                                                            7
                                                        )
                                                    }
                                                >
                                                    7 pessoas
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </Div>
                            </Div>
                            <Div className="products-list-all">
                                <Div className="products-filter-rev">
                                    <select className="select-product-filter">
                                        <option>Relevância</option>
                                        <option>Preço ascendente</option>
                                        <option>Preço descendente</option>
                                    </select>
                                </Div>
                                <Div className="products-list">
                                    {events?.map((item: any) => (
                                        <Div
                                            className="product-item"
                                            onclick={() =>
                                                window.open(
                                                    `/evento/${item.id}`,
                                                    `_self`
                                                )
                                            }
                                            key={item.id}
                                        >
                                            <div
                                                className="product-image"
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
                                        </Div>
                                    ))}
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Content>
        </>
    );
}
