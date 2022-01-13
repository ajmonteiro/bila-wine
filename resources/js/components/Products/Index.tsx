import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import Banner from "../Home/Banner";
import { CartIconV2 } from "../Layout/Icons";
import { Content, Div } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";
import Navbar from "../Layout/Navbar/Navbar";
import { ToastSuccess } from "../Layout/Toast";

export default function Products() {
    const [products, setProducts] = useState<any>();
    const [visibleCategories, setVisibleCategories] = useState<any>(true);
    const [visiblePrices, setVisiblePrices] = useState<any>(true);
    const [categories, setCategories] = useState<any>();

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    function getCategories() {
        api.get(`/api/categories`, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            setCategories(res.data.categories)
        })
    }

    function getProducts() {
        api.get(`/api/products`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setProducts(res.data.products);
        });
    }

    function handleAddToCart(e: any, id: any) {
        const form = new FormData();
        form.append("id_product", id);

        api.post(`/api/cart`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                ToastSuccess("Adicionado ao carrinho", "bottom-right");
            })
            .catch((err) => {
                console.log(err.response);
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
                                    {products?.map((item: any) => (
                                        <Div
                                            className="product-item"
                                            onclick={() =>
                                                window.open(
                                                    `/produto/${item.id}`,
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
                                                    {item.name}
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
