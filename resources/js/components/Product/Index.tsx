import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Paragraph, Title } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";

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
        getProduct();
    }, []);

    function params(): { id: any } {
        return useParams();
    }

    function getProduct() {
        api.get(`/api/product/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setproduct(res.data);
            setproductid(res.data.product.id);
            setimage(res.data.product.image);
            setdescription(res.data.product.description);
            settitle(res.data.product.name);
            setprice(res.data.product.price);
            setbigdescription(res.data.product.big_description);
        });
    }

    function addToCart(e: any, id: any) {
        const form = new FormData();
        form.append(`id_product`, id);
        form.append(`type`, `product`);
        
        api.post(`/api/cart`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
        });
    }

    return (
        <>
            <TopMenu />
            <Div className="produto-single-page">
                <Div className="produto-container">
                    <Div className="produto-grid">
                        <div
                            style={{
                                backgroundImage:
                                    `url(` + baseURL() + image + `)`,
                                width: "90%",
                                height: "300px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        <Div className="flex flex-col justify-between">
                            <Div className="flex flex-col">
                                <h2 className="text-2xl font-bold">{title}</h2>
                                <span style={{ fontSize: "0.8rem" }}>
                                    {description}
                                </span>
                            </Div>
                            <Div className="produto-add-cart flex justify-between items-center">
                                <span className="font-bold text-2xl" style={{ color: '#a45459'}}>€{price}</span>
                                <Button
                                    text="ADICIONAR AO CARRINHO"
                                    onclick={(e) => addToCart(e, id)}
                                />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
