import React, { useState, useEffect } from 'react'
import api, { baseURL } from '../Data/Api'
import { getToken } from '../Data/Auth'
import { Content, Div } from '../Layout/Layout'
import TopMenu from '../Layout/Menu'
import Navbar from '../Layout/Navbar/Navbar'

export default function Gifts() {
    const [gifts, setGifts] = useState<any>();

    useEffect(() => {
        getGifts()
    }, [])

    function getGifts() {
        api.get(`/api/gifts`, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            console.log(res)
            setGifts(res.data.gifts)
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
                                        Pre
                                    </span>
                                    sentes
                                </h2>
                            </Div>
                            <Div className="products-wrapper-self">
                                <Div className="products-container">
                                    {gifts?.map((item:any) => 
                                        <Div className="product-self">
                                            <div
                                                className="product-self-image"
                                                style={{
                                                    backgroundImage: `url(${
                                                        baseURL() + item.image
                                                    })`,
                                                }}
                                            >
                                                <Div className="product-self-badge"></Div>
                                            </div>
                                            <Div className="product-self-info">
                                                <h3>{item.name}</h3>
                                                <Div className="product-price">
                                                    <span>
                                                        {item.price + "€"}
                                                    </span>
                                                </Div>
                                                <Div className="product-btn">
                                                    <button className="products-btn products-btn-main">
                                                        <i className="las la-shopping-cart"></i>Carrinho
                                                    </button>
                                                </Div>
                                            </Div>
                                        </Div>
                                    )}
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Content>
        </>
    )
}