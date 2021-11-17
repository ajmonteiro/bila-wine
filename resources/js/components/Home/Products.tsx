import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Image, Paragraph, Title } from "../Layout/Layout";

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

    function handleAddToCart(e: any, id: number) {
            
    }

    return (
        <>
            <Title title={"PRODUTOS"} className="text-3xl" />
            <Div className="flex items-center justify-center grid grid-cols-3 gap-4">
                {products?.map(
                    (item: {
                        id: number;
                        name: string;
                        description: string;
                        image: string;
                        price: string;
                    }) => (
                        <Div>
                            <Div className="py-6">
                                <Div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div
                                        className="w-1/3 bg-cover"
                                        style={{
                                            backgroundImage: `url(${
                                                baseURL() + item.image
                                            })`,
                                        }}
                                    ></div>
                                    <Div className="w-2/3 p-4">
                                        <Title
                                            className="text-gray-900 font-bold text-2xl"
                                            title={item.name}
                                        />
                                        <Paragraph
                                            className="mt-2 text-gray-600 text-sm"
                                            text={item.description}
                                        />
                                        <Div className="flex item-center justify-between mt-3">
                                            <Title
                                                className="text-gray-700 font-bold text-xl"
                                                title={item.price + "€"}
                                            />
                                            <Button
                                                className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                                                text={"Adicionar ao carrinho"}
                                                onclick={(e) => handleAddToCart(e, item.id)}
                                            />
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    )
                )}
            </Div>
        </>
    );
}
function handleAddToCart(e: any, id: number): any {
    throw new Error("Function not implemented.");
}

