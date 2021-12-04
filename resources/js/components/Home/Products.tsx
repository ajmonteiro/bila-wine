import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Image, Paragraph, Title } from "../Layout/Layout";
import { ToastSuccess } from "../Layout/Toast";

export default function Products() {
    const [products, setproducts] = useState<any>();
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        api.get(`/api/products`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setproducts(res.data.products);
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

    function changePage(e: any, id: any) {
        window.open(`/product/${id}`, `_self`)
    }

    return (
        <>
            <Div className="bg-white overflow-x-hidden">
                <Div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Title
                        className="text-2xl font-extrabold tracking-tight text-gray-900"
                        title={"Produtos"}
                    />
                    <Div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products?.map(
                            (item: {
                                id: any;
                                image: any;
                                name: any;
                                description: any;
                                price: any;
                            }) => (
                                <Div key={item.id}>
                                    <Div className="group relative" onclick={(e) => changePage(e, item.id)}>
                                        <Div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                            <img
                                                src={baseURL() + item.image}
                                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                            />
                                        </Div>
                                        <Div className="mt-4 flex justify-between">
                                            <Div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href="#">
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        ></span>
                                                        {item.name}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {item.description}
                                                </p>
                                            </Div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {item.price + "€"}
                                            </p>
                                        </Div>
                                    </Div>
                                    <Div className="z-50 cursor-pointer flex justify-end">
                                        <p
                                            onClick={(e: any) =>
                                                handleAddToCart(e, item.id)
                                            }
                                        >
                                            Adicionar +
                                        </p>
                                    </Div>
                                </Div>
                            )
                        )}
                    </Div>
                </Div>
            </Div>
        </>
    );
}
