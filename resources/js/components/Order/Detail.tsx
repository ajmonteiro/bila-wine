import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Div } from "../Layout/Layout";
import TopMenu from "../Layout/TopMenu";
import { AddOneMonthFromUnix, TimeConverterFromUnix } from "../Data/Utils/DataConverters";

export default function OrderDetail() {
    const { id } = params();
    const [products, setProducts] = useState<any>();
    const [price, setPrice] = useState<any>();
	const [order, setorder] = useState<any>();
	const [createdAt, setCreatedAt] = useState<any>();

    useEffect(() => {
        getOrderDetails();
    }, []);

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
            console.log(info);
			setorder(res.data.order)
			setCreatedAt(res.data.order.created_at);
            setPrice(res.data.order.total_price);
        });
    }
    return (
        <>
            <TopMenu />
            <Div className="invoice-box mt-10">
                <table cellPadding={0} cellSpacing={0}>
                    <tr className="top">
                        <td colSpan={2}>
                            <table>
                                <tr>
                                    <td className="title">
                                        <img
                                            src="http://nextstepwebs.com/images/logo.png"
                                            style={{
                                                width: "100%",
                                                maxWidth: "300px",
                                            }}
                                        />
                                    </td>

                                    <td>
                                        Invoice #: 123
                                        <br />
                                        Criada em: {TimeConverterFromUnix(createdAt)}
                                        <br />
                                        Due: {AddOneMonthFromUnix(createdAt)}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr className="information">
                        <td colSpan={2}>
                            <table>
                                <tr>
                                    <td>
                                        Next Step Webs, Inc.
                                        <br />
                                        12345 Sunny Road
                                        <br />
                                        Sunnyville, TX 12345
                                    </td>

                                    <td>
                                        Acme Corp.
                                        <br />
                                        John Doe
                                        <br />
                                        john@example.com
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr className="heading">
                        <td colSpan={2}>Método de pagamento</td>
                    </tr>

                    <tr className="details">
                        <td>Stripe</td>
                    </tr>

                    <tr className="heading">
                        <td>Item</td>

                        <td>Price</td>
                    </tr>

                    <tr className="item">
                        <td>Website design</td>

                        <td>$300.00</td>
                    </tr>

                    <tr className="item">
                        <td>Hosting (3 months)</td>

                        <td>$75.00</td>
                    </tr>

                    <tr className="item last">
                        <td>Domain name (1 year)</td>

                        <td>$10.00</td>
                    </tr>

                    <tr className="total">
                        <td></td>

                        <td>Total: $385.00</td>
                    </tr>
                </table>
            </Div>
        </>
    );
}
