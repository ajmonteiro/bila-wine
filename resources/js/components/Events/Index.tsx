import React, { useState, useEffect } from 'react'
import api, { baseURL } from '../Data/Api'
import { getToken } from '../Data/Auth'
import { Content, Div } from '../Layout/Layout'
import TopMenu from '../Layout/Menu'
import Navbar from '../Layout/Navbar/Navbar'

export default function Events() {
    const [events, setEvents] = useState<any>();

    useEffect(() => {
        getEvents()
    }, [])

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
                <Div className="products-hero-search">
                    <Div className="products-wrapper">
                        <Div className="products-search-grid">
                            <Div>
                                <select
                                    name={""}
                                    className="products-form-control"
                                >
                                    <option value={""}>Categoria</option>
                                </select>
                            </Div>
                            <Div>
                                <select
                                    name={""}
                                    className="products-form-control"
                                ></select>
                            </Div>
                            <Div>
                                <select
                                    name={""}
                                    className="products-form-control"
                                ></select>
                            </Div>
                            <Div>
                                <button className="products-btn products-btn-main products-btn-block">
                                    Procurar
                                </button>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="products-main">
                    <Div className="products-product-section">
                        <Div className="products-wrapper">
                            <Div className="products-product-header">
                                <h2>
                                    <span className="product-text-main">
                                        Eve
                                    </span>
                                    ntos
                                </h2>
                            </Div>
                            <Div className="products-wrapper-self">
                                <Div className="products-container">
                                    {events?.map((item: any) => (
                                        <Div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                            <Div className="overflow-x-hidden rounded-2xl relative">
                                                <img
                                                    className="h-40 rounded-2xl w-full object-cover"
                                                    src={baseURL() + item.image}
                                                />
                                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 group-hover:opacity-50 opacity-70"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="black"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                        />
                                                    </svg>
                                                </p>
                                            </Div>
                                            <Div className="mt-4 pl-2 mb-2 flex justify-between ">
                                                <Div>
                                                    <p className="text-lg font-semibold text-gray-900 mb-0">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-md text-gray-800 mt-0 mb-0">
                                                        {item.price + '€'}
                                                    </p>
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