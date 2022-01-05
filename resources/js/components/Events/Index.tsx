import React, { useState, useEffect } from 'react'
import api, { baseURL } from '../Data/Api'
import { getToken } from '../Data/Auth'
import { Content, Div } from '../Layout/Layout'
import TopMenu from '../Layout/Menu'
import Navbar from '../Layout/Navbar/Navbar'

export default function Events() {
    const [events, setEvents] = useState<any>();
    const [visibleCategories, setVisibleCategories] = useState<any>(true);
    const [visiblePrices, setVisiblePrices] = useState<any>(true);
    const [categories, setCategories] = useState<any>();

    useEffect(() => {
        getEvents();
        getCategories();
    }, [])

    function getCategories() {
        api.get(`/api/categories`, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            setCategories(res.data.categories)
        })
    }

    function getEvents() {
        api.get(`/api/events`, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            console.log(res)
            setEvents(res.data.events)
        })
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
                                                setVisibleCategories(
                                                    !visibleCategories
                                                )
                                            }
                                        >
                                            {visibleCategories ? (
                                                <i className="las la-angle-up"></i>
                                            ) : (
                                                <i className="las la-angle-right"></i>
                                            )}
                                            <span>Categoria</span>
                                        </li>
                                        {visibleCategories && (
                                            <>
                                                {categories?.map((item: any) => (
                                                    <li key={item.id}>{item.name}</li>
                                                ))}
                                            </>
                                        )}
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
                                                <li>€50 - €100</li>
                                                <li>€100 - €200</li>
                                                <li>€200 - €500</li>
                                                <li>€500 - €1000</li>
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
    )
}