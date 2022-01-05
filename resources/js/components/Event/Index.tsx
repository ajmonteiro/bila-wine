import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Paragraph, Title } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";

export default function EventId() {
    const [event, setevent] = useState<any>();
    const [image, setimage] = useState<string>();
    const [description, setdescription] = useState<any>();
    const [big_description, setbigdescription] = useState<any>();
    const [title, settitle] = useState<any>();
    const [price, setprice] = useState<any>();
    const [eventid, seteventid] = useState<any>();
    const { id } = params();

    useEffect(() => {
        getevent();
    }, []);

    function params(): { id: any } {
        return useParams();
    }

    function getevent() {
        api.get(`/api/event/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res)
            setevent(res.data);
            seteventid(res.data.event.id);
            setimage(res.data.event.image);
            setdescription(res.data.event.description);
            settitle(res.data.event.title);
            setprice(res.data.event.price);
            setbigdescription(res.data.event.big_description);
        });
    }

    function addToCart(e: any, id: any) {
        const form = new FormData();
        form.append(`id_product`, id);
        form.append(`type`, `event`);
        api.post(`/api/cart`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
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
