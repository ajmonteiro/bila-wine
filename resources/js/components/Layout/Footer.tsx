import React, { useState } from "react";
import { Div } from "./Layout";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Div className="footer-container">
                    <Div className="footer-row">
                        <Div className="footer-col">
                            <h4
                                className="flex justify-center cursor-pointer"
                                onClick={() =>
                                    window.open(`/contactos`, `_self`)
                                }
                            >
                                CONTACTOS
                            </h4>
                        </Div>
                        <Div className="footer-col">
                            <h4
                                className="flex justify-center cursor-pointer"
                                onClick={() =>
                                    window.open(`/sobre-bilawine`, `_self`)
                                }
                            >
                                SOBRE BILAWINE
                            </h4>
                        </Div>
                        <Div className="footer-col">
                            <h4
                                className="flex justify-center cursor-pointer"
                                onClick={() =>
                                    window.open(`/sobre-bilawine`, `_self`)
                                }
                            >
                                LINKS ÚTEIS
                            </h4>
                        </Div>
                        <Div className="footer-col">
                            <h4
                                className="flex justify-center cursor-pointer"
                                onClick={() =>
                                    window.open(`/sobre-bilawine`, `_self`)
                                }
                            >
                                OPINIÃO
                            </h4>
                        </Div>
                    </Div>
                    <hr className="w-full mt-10 text-black" />
                </Div>
            </footer>
        </>
    );
}
