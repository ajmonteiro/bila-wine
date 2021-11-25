import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Paragraph, Title } from "../Layout/Layout";
import TopMenu from "../Layout/TopMenu";

export default function ProductId() {
    const [product, setproduct] = useState<any>();
    const [image, setimage] = useState<string>();
    const [description, setdescription] = useState<any>();
    const [big_description, setbigdescription] = useState<any>();
    const [title, settitle] = useState<any>();
    const [price, setprice] = useState<any>();
    const [productid, setproductid] = useState<any>();
    const { id } = params();
    
    useEffect(() => {
        getProduct()
    }, [])

    function params(): { id: any; } {
        return useParams();
    }

    function getProduct() {
        api.get(`/api/product/${id}`, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            setproduct(res.data)
            setproductid(res.data.product.id)
            setimage(res.data.product.image)
            setdescription(res.data.product.description)
            settitle(res.data.product.name)
            setprice(res.data.product.price)
            setbigdescription(res.data.product.big_description)
        })
    }

    function addToCart(e: any, id: any) {
        const form = new FormData
        form.append(`id_product`, id)
        api.post(`/api/cart`, form, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            console.log(res)
        })
    }

    return (
        <>
            <TopMenu />
            <Div className="bg-white">
                <Div className="pt-6">
                    <Div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8">
                        <Div className="w-full h-30 sm:rounded-lg sm:overflow-hidden">
                            {image && 
                            <img
                                src={baseURL() + image}
                                className="w-full h-60 object-center object-cover"
                            />}
                        </Div>
                    </Div>

                    <Div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <Div className="lg:col-span-2 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                {title}
                            </h1>
                        </Div>

                        <Div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
                            <Div>
                                <Title title={description} className="sr-only" />

                                <Div className="space-y-6">
                                    <Paragraph className="text-base text-gray-900" text={price + '€'} />
                                </Div>
                            </Div>
                            <Div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">
                                    Descrição
                                </h2>

                                <Div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">
                                       {big_description}
                                    </p>
                                </Div>
                            </Div>
                            <Div className="mt-10">
                                <Button text={"Adicionar ao carrinho"} onclick={(e: any) => addToCart(e, productid)}/>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
