import React, { useState, useEffect } from "react";
import { baseURL } from "../../Data/Api";
import { CartIcon, DeleteIcon } from "../Icons";
import { Div, Title } from "../Layout";

export default function Navbar() {
    return (
        <>
            <ShippingFree />
            <Menu />
        </>
    );
}

export function Menu() {
    function goCart() {
        window.open(`/cart`, `_self`)
    }
    return (
        <>
            <Div className="top-nav">
                <nav>
                    <Div className="logo">BILAWINE</Div>
                    <Div className="right-nav">
                        <ul>
                            <li>
                                <a href="#">Produtos</a>
                            </li>
                            <li>
                                <a href="#">Eventos</a>
                            </li>
                            <li>
                                <a href="#">Presentes</a>
                            </li>
                            <li>
                                <a href="#">Contactos</a>
                            </li>
                            <li>
                                <a href="#">
                                    <CartIcon onclick={() => goCart()} />
                                </a>
                            </li>
                        </ul>
                        <Div className="mobile-btn">
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                        </Div>
                    </Div>
                </nav>
                <Div className="mobile-links">
                    <Div className="search">
                        <input type="text" placeholder="search" />
                        <img src="/assets/search.svg" alt="search icon" />
                    </Div>
                    <ul>
                        <li>
                            <a href="#">Produtos</a>
                        </li>
                        <li>
                            <a href="#">Eventos</a>
                        </li>
                        <li>
                            <a href="#">Presentes</a>
                        </li>
                        <li>
                            <a href="#">Contactos</a>
                        </li>
                    </ul>
                </Div>
            </Div>
        </>
    );
}

export function ShippingFree() {
    return (
        <>
            <Div className="shipping-section">
                <span>
                    Envio grátis <i>acima de 40€</i>
                </span>
            </Div>
        </>
    );
}