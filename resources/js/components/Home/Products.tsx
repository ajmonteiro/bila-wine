import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Image, Paragraph, Title } from "../Layout/Layout";
import { ToastSuccess } from "../Layout/Toast";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default function Products() {
    const [products, setproducts] = useState<any>();
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        api.get(`/api/products/paginate`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setproducts(res.data.products);
        });
    }

    function handleAddToCart(e: any, id: any) {
        const form = new FormData();
        form.append("id_product", id);
        form.append(`type`, `product`);

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

    function changePage(e: any, id: any) {
        window.open(`/produto/${id}`, `_self`);
    }

    return (
        <>
            {products && (
                <Div className="bg-white overflow-x-hidden">
                    <Div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <Title
                            className="text-2xl font-extrabold tracking-tight text-gray-900"
                            title={"Produtos"}
                        />
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
                            {products?.data.map(
                                (item: {
                                    id: any;
                                    image: any;
                                    name: any;
                                    description: any;
                                    price: any;
                                }) => (
                                    <SplideSlide>
                                        <div
                                            key={item.id}
                                            className="m-3"
                                        >
                                            <div
                                                className="product-image  cursor-pointer"
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
                                                    {item.name}
                                                </Div>
                                                <Div className="product-description">
                                                    {item.description}
                                                </Div>
                                                <div className="product-price">
                                                    €{item.price}
                                                    <i className="las la-cart-plus cursor-pointer" onClick={(e) => handleAddToCart(e, item.id)}></i>
                                                </div>

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
