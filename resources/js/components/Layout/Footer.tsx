import React, { useState } from "react";
import { Div } from "./Layout";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Div className="w-full text-footer-d p-2 flex mb-3 font-bold justify-center">
                    <h1 className="text-xl text-white">BILAWINE</h1>
                </Div>
                <Div className="footer-container">
                    <Div className="footer-row">
                        <Div className="footer-col">
                            <h4 className="flex justify-center">
                                APOIO AO CLIENTE
                            </h4>
                            <ul className="flex flex-col items-center">
                                <li>
                                    <a href="#">about us</a>
                                </li>
                                <li>
                                    <a href="#">our services</a>
                                </li>
                                <li>
                                    <a href="#">privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">affiliate program</a>
                                </li>
                            </ul>
                        </Div>
                        <Div className="footer-col">
                            <h4 className="flex justify-center">
                                SOBRE BILAWINE
                            </h4>
                            <ul className="flex flex-col items-center">
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">shipping</a>
                                </li>
                                <li>
                                    <a href="#">returns</a>
                                </li>
                                <li>
                                    <a href="#">order status</a>
                                </li>
                                <li>
                                    <a href="#">payment options</a>
                                </li>
                            </ul>
                        </Div>
                        <Div className="footer-col">
                            <h4 className="flex justify-center">LINKS ÚTEIS</h4>
                            <ul className="flex flex-col items-center">
                                <li>
                                    <a href="#">watch</a>
                                </li>
                                <li>
                                    <a href="#">bag</a>
                                </li>
                                <li>
                                    <a href="#">shoes</a>
                                </li>
                                <li>
                                    <a href="#">dress</a>
                                </li>
                            </ul>
                        </Div>
                        <Div className="footer-col">
                            <h4 className="flex justify-center">OPINIÃO</h4>
                            <ul className="flex flex-col items-center">
                                <li>
                                    <a href="#">watch</a>
                                </li>
                                <li>
                                    <a href="#">bag</a>
                                </li>
                                <li>
                                    <a href="#">shoes</a>
                                </li>
                                <li>
                                    <a href="#">dress</a>
                                </li>
                            </ul>
                        </Div>
                    </Div>
                    <hr className="w-full mt-10 text-black" />
                </Div>
            </footer>
        </>
    );
}
