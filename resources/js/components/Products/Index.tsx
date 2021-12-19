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

    useEffect(() => {
        getProducts();
    }, []);

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
                console.log(res);
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
                                        Pro
                                    </span>
                                    dutos
                                </h2>
                            </Div>
                            <Div className="products-wrapper-self">
                                <Div className="products-container">
                                    {products?.map((item: any) => (
                                        <Div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                            <Div className="overflow-x-hidden rounded-2xl relative">
                                                <img
                                                    className="h-40 rounded-2xl w-full object-cover"
                                                    src={baseURL() + item.image}
                                                />
                                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group" onClick={(e: any) =>
                                                handleAddToCart(e, item.id)
                                            }>
                                                   <CartIconV2 />
                                                </p>
                                            </Div>
                                            <Div className="mt-4 pl-2 mb-2 flex justify-between ">
                                                <Div>
                                                    <p className="text-lg font-semibold text-gray-900 mb-0">
                                                        {item.name}
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
    );
}
