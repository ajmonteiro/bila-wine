import React, { useState, useEffect } from "react";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { TimeConverterFromUnix } from "../Data/Utils/DataConverters";
import { Button, Div } from "../Layout/Layout";

export default function UserOrders() {
    const [orders, setOrders] = useState<any>();

    useEffect(() => {
        api.get(`/api/orders`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setOrders(res.data.orders);
            })
            .catch((err) => console.log(err.response));
    }, []);
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">
                        As minhas encomendas
                    </h3>
                </Div>
                <Div className="orders-user-grid">
                    {orders?.map((item: any) => (
                        <Div className="last-order">
                            <Div className="flex justify-between div-up mt-5">
                                <Div>
                                    <p>
                                        Encomenda Nº: <b>{item.id_invoice}</b>
                                    </p>
                                    <p>
                                        Data de compra: <b>{TimeConverterFromUnix(item.created_at)}</b>
                                    </p>
                                </Div>
                                <Div>
                                    <p>
                                        Valor: <b>€{item.total_price}</b>
                                    </p>
                                </Div>
                            </Div>
                            <Div className="user-details-b">
                                <Button text="VER DETALHES" />
                            </Div>
                        </Div>
                    ))}
                </Div>
            </Div>
        </>
    );
}
