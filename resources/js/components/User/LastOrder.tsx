import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { TimeConverterFromUnix } from "../Data/Utils/DataConverters";
import { Button, Div } from "../Layout/Layout";

export default function LastOrder() {
    const [order, setOrder] = useState<any>();
    const [invoice, setInvoice] = useState<any>();
    const [createdAt, setCreatedAt] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [id, setId] = useState<any>();

    useEffect(() => {
        getLastOrder();
    }, []);

    function getLastOrder() {
        api.get(`/api/lastorder`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setOrder(res.data.order);
                setInvoice(res.data.order.id_invoice);
                setCreatedAt(res.data.order.created_at);
                setPrice(res.data.order.total_price);
                setId(res.data.order.id)
            })
            .catch((err) => console.log(err));
    }

    function downloadOrderFile(e: any, id: any) {
        e.preventDefault();
        api.get(`/api/generate/${id}`, { headers: { Authorization: `Bearer ${getToken()}`}
        })
        .then((res) => {
            const link = document.createElement("a");
            link.href = baseURL() + '/' + res.data.link;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }

    return (
        <>
            <Div>
                {order && (
                    <>
                        <Div className="flex align-baseline">
                            <span className="las la-dolly text-2xl"></span>
                            <h3 className="text-xl ml-4 order-text">
                                Última encomenda
                            </h3>
                        </Div>
                        <Div className="last-order">
                            <Div className="flex justify-between div-up mt-5">
                                <Div>
                                    <p>
                                        Encomenda Nº: <b>{invoice}</b>
                                    </p>
                                    <p>
                                        Data de compra:{" "}
                                        <b>
                                            {TimeConverterFromUnix(createdAt)}
                                        </b>
                                    </p>
                                </Div>
                                <Div>
                                    <p>
                                        Valor: <b>€{price}</b>
                                    </p>
                                </Div>
                            </Div>
                            <Div className="user-details-b">
                                <Button text="DOWNLOAD" onclick={(e) => downloadOrderFile(e, id)} />
                            </Div>
                        </Div>
                    </>
                )}

                <Div className="grid-info-orders">
                    <Div>
                        <i className="las la-dolly text-6xl"></i>
                        <span>Entregas em Portugal continental e ilhas.</span>
                    </Div>
                    <Div>
                        <i className="las la-box-open text-6xl"></i>
                        <span>Devoluções gratuitas até 30 dias.</span>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
