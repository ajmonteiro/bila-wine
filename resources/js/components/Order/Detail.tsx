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
        setinfo(info);
    }
    function params(): { id: any } {
        return useParams();
    }

    function getOrderDetails() {
        api.get(`/api/order/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            if (!res.data.order) {
                window.open(`/`, `_self`);
            }
            let info = JSON.parse(res.data.order.info);
            getInfo(info);
            setProducts(res.data.order.all_products);
            setorder(res.data.order);
            setCreatedAt(res.data.order.created_at);
            setPrice(res.data.order.total_price);
            settotal(res.data.order.total.toFixed(2));
            setname(info.first_name + " " + info.last_name);
            setemail(info.email);
            setState(res.data.order.state);
            setinvoiceid(res.data.order.id_invoice);
            setPostalCode(info.postal_code);
            setAddress(info.address);
        });
    }

    function payInvoice(e: any) {
        const form = new FormData();
        form.append(`id_order`, id);
        api.post(`/api/pay`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
        });
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
                                    Rua da Estreada, N6, Vila Seca
                                    <br />
                                    5000-022
                                </span>
                            </Div>
                            <Div className="second-div-grid-top-order flex flex-col text-right">
                                <span>
                                    Américo Monteiro
                                    <br />
                                    americo.mnt@gmail.com
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
