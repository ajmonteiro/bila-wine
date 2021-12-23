import React, { useState, useEffect } from "react";
import { Div } from "../Layout/Layout";

export default function LastOrder() {
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <span className="las la-dolly text-2xl"></span>
                    <h3 className="text-xl ml-4 order-text">Última encomenda</h3>
                </Div>
                <Div className="last-order">
                    <Div className="flex justify-between div-up mt-5">
                        <Div>
                            <p>Encomenda Nº: <b>313123</b></p>
                            <p>Data de compra: <b>313123</b></p>
                        </Div>
                        <Div>
                            <p>Valor: <b>€39.99</b></p>
                        </Div>
                    </Div>
                    <Div className="user-details-b">
                        <button className="user-details-button">VER DETALHES</button>
                    </Div>
                </Div>
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
