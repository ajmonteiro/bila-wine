import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Paragraph } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";
import {
    AddOneMonthFromUnix,
    TimeConverterFromUnix,
} from "../Data/Utils/DataConverters";
import { InformationCircleIcon } from "@heroicons/react/outline";
import Stripe from "./Stripe";

export default function OrderDetail() {
    const { id } = params();
    const [products, setProducts] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [order, setorder] = useState<any>();
    const [createdAt, setCreatedAt] = useState<any>();
    const [info, setinfo] = useState<any>();
    const [total, settotal] = useState<any>();
    const [invoiceid, setinvoiceid] = useState<any>();
    const [name, setname] = useState<any>();
    const [email, setemail] = useState<any>();
    const [postalCode, setPostalCode] = useState<any>();
    const [address, setAddress] = useState<any>();
    const [state, setState] = useState<any>();

    useEffect(() => {
        getOrderDetails();
    }, []);

    function getInfo(info: any) {
        setinfo(JSON.parse(info));
    }
    function params(): { id: any } {
        return useParams();
    }


    function getOrderDetails() {
        api.get(`/api/order/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            // if (!res.data.order) {
            //     window.open(`/`, `_self`);
            // }
            setProducts(objectToArray(JSON.parse(res.data.order.products)));
            getInfo(res.data.order.info);
            setorder(res.data.order);
            setCreatedAt(res.data.order.created_at);
            setPrice(res.data.order.total_price);
            settotal(res.data.order.total_price.toFixed(2));
            setState(res.data.order.state);
            setinvoiceid(res.data.order.id_invoice);
        });
    }

    useEffect(() => {
        let tot = 0;
        products?.map((item: any) =>
            (tot = tot + parseFloat(item.price)).toFixed(2)
        );
        settotal(tot.toFixed(2));
    }, [products]);

    const objectToArray = (obj: any) => {
        const keys = Object.keys(obj);
        const res = [];
        for (let i = 0; i < keys.length; i++) {
            res.push([obj[keys[i]]][0]);
        }
        return res;
    };

    function payInvoice(e: any) {
        const form = new FormData();
        form.append(`id_order`, id);
        api.post(`/api/pay`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {});
    }

    async function setActive(id: any) {
        let active = document.getElementById(id);
        if (active?.style.display) {
            if (active?.style.display == "none") {
                active.style.display = "block";
            } else {
                active.style.display = "none";
            }
        }
    }

    return (
        <>
            <TopMenu />
            <Div className="order-view-pd">
                <Div className="order-div-list">
                    <Div className="order-view">
                        <Div className="grid-top-order-view">
                            <Div>
                                <span className="text-4xl">BILAWINE</span>
                            </Div>
                            <Div className="second-div-grid-top-order flex flex-col text-right">
                                <span>Fatura #{invoiceid}</span>
                                <span>
                                    Criada em:{" "}
                                    {TimeConverterFromUnix(createdAt)}
                                </span>
                                <span>
                                    Expira a: {AddOneMonthFromUnix(createdAt)}
                                </span>
                            </Div>
                            <Div>
                                <span>
                                    {info?.address}
                                    <br />
                                    {info?.postal_code}
                                </span>
                            </Div>
                            <Div className="second-div-grid-top-order flex flex-col text-right">
                                <span>
                                    {info?.first_name}{" "}{info?.last_name}
                                    <br />
                                    {info?.email}
                                </span>
                            </Div>
                        </Div>
                        <Div className="order-method-payment">
                            <span>Método de pagamento</span>
                        </Div>
                        <Div className="order-method-text">
                            <span>Stripe</span>
                        </Div>
                        <Div className="order-table-products">
                            <span>Produtos</span>
                        </Div>
                        {products?.map((item: any, key: any) => (
                            <>
                                <div
                                    className="order-product-in-table"
                                    onClick={() => setActive(item.id)}
                                    key={item.id}
                                >
                                    <span>{item.name}</span>
                                    <i className="las la-angle-right"></i>
                                </div>
                                <div
                                    id={`${item.id}`}
                                    style={{
                                        fontSize: "0.7rem",
                                        width: "70%",
                                        display: "none",
                                    }}
                                    key={item.id}
                                >
                                    <span>{item.description}</span>
                                    <span className="font-bold">
                                        <br />€{item.price}
                                    </span>
                                </div>
                            </>
                        ))}
                        <Div className="order-product-in-table">
                            <span>Total</span>
                            <span>€{total}</span>
                        </Div>
                    </Div>
                    <Div className="mt-3">
                        {state == 1 ? (
                            <Paragraph text={"Pago"} />
                        ) : (
                            <Stripe price={total} />
                        )}
                    </Div>
                </Div>
            </Div>
        </>
    );
}
