import React, { useState, useEffect } from "react";
import { Button, Div } from "../Layout/Layout";

export default function UserOrders() {
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">
                        As minhas encomendas
                    </h3>
                </Div>
                <Div className="orders-user-grid">
                    <Div className="last-order">
                        <Div className="flex justify-between div-up mt-5">
                            <Div>
                                <p>
                                    Encomenda Nº: <b>313123</b>
                                </p>
                                <p>
                                    Data de compra: <b>313123</b>
                                </p>
                            </Div>
                            <Div>
                                <p>
                                    Valor: <b>€39.99</b>
                                </p>
                            </Div>
                        </Div>
                        <Div className="user-details-b">
                            <Button text="VER DETALHES" />
                        </Div>
                    </Div>
                    <Div className="last-order">
                        <Div className="flex justify-between div-up mt-5">
                            <Div>
                                <p>
                                    Encomenda Nº: <b>313123</b>
                                </p>
                                <p>
                                    Data de compra: <b>313123</b>
                                </p>
                            </Div>
                            <Div>
                                <p>
                                    Valor: <b>€39.99</b>
                                </p>
                            </Div>
                        </Div>
                        <Div className="user-details-b">
                            <Button text="VER DETALHES" />
                        </Div>
                    </Div>
                    <Div className="last-order">
                        <Div className="flex justify-between div-up mt-5">
                            <Div>
                                <p>
                                    Encomenda Nº: <b>313123</b>
                                </p>
                                <p>
                                    Data de compra: <b>313123</b>
                                </p>
                            </Div>
                            <Div>
                                <p>
                                    Valor: <b>€39.99</b>
                                </p>
                            </Div>
                        </Div>
                        <Div className="user-details-b">
                            <Button text="VER DETALHES" />
                        </Div>
                    </Div>
                    <Div className="last-order">
                        <Div className="flex justify-between div-up mt-5">
                            <Div>
                                <p>
                                    Encomenda Nº: <b>313123</b>
                                </p>
                                <p>
                                    Data de compra: <b>313123</b>
                                </p>
                            </Div>
                            <Div>
                                <p>
                                    Valor: <b>€39.99</b>
                                </p>
                            </Div>
                        </Div>
                        <Div className="user-details-b">
                            <Button text="VER DETALHES" />
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
