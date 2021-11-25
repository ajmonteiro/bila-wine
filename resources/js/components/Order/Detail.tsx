import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Div, Paragraph } from "../Layout/Layout";
import TopMenu from "../Layout/TopMenu";
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
            settotal(res.data.order.total);
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
    return (
        <>
            <TopMenu />
            <Div className="mt-15">
                <Div className="invoice-box">
                    <table cellPadding={0} cellSpacing={0}>
                        <tr className="top">
                            <td colSpan={3}>
                                <table>
                                    <tr>
                                        <td className="title">
                                            <Paragraph text={"BILA WINE"} />
                                        </td>
                                        <td colSpan={2}>
                                            Fatura #: {invoiceid}
                                            <br />
                                            Criada em:{" "}
                                            {TimeConverterFromUnix(createdAt)}
                                            <br />
                                            Expira a:{" "}
                                            {AddOneMonthFromUnix(createdAt)}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr className="information">
                            <td colSpan={3}>
                                <table>
                                    <tr>
                                        <td>
                                            {address}
                                            <br />
                                            {postalCode}
                                        </td>

                                        <td>
                                            <br />
                                            {name}
                                            <br />
                                            {email}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr className="heading">
                            <td colSpan={3}>Método de pagamento</td>
                        </tr>

                        <tr className="details">
                            <td>Stripe</td>
                        </tr>

                        <tr className="heading">
                            <td>#</td>
                            <td>Item</td>
                            <td
                                style={{
                                    display: "flex",
                                    flexGrow: 1,
                                    justifyContent: "flex-end",
                                    textAlign: "right",
                                }}
                            >
                                Preço
                            </td>
                        </tr>
                        {products?.map((item: any) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td
                                    style={{
                                        display: "flex",
                                        flexGrow: 1,
                                        justifyContent: "flex-end",
                                        textAlign: "right",
                                    }}
                                >
                                    {item.price + "€"}
                                </td>
                            </tr>
                        ))}

                        <tr className="total">
                            <td></td>
                            <td></td>

                            <td
                                style={{
                                    display: "flex",
                                    flexGrow: 1,
                                    justifyContent: "flex-end",
                                    textAlign: "right",
                                }}
                            >
                                Total: {total + "€"}
                            </td>
                        </tr>
                    </table>
                    {state == 1 ? (
                        <Paragraph text={"Pago"} />
                    ) : (
                        <Stripe price={total} />
                    )}
                </Div>
            </Div>
        </>
    );
}
