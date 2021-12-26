import React, { useState, useEffect } from "react";
import { Div } from "../Layout/Layout";
import Navbar from "../Layout/Navbar/Navbar";

export default function Faqs() {
    return (
        <>
            <Navbar />
            <Div className="faqs">
                <Div className="faqs-grid">
                    <Div>
                        <span>FAQ NUMERO 1</span>
                        <i className="las la-angle-right"></i>
                    </Div>
                    <Div>
                        <span>FAQ NUMERO 1</span>
                        <i className="las la-angle-right"></i>
                    </Div>
                    <Div>
                        <span>FAQ NUMERO 1</span>
                        <i className="las la-angle-right"></i>
                    </Div>
                    <Div>
                        <span>FAQ NUMERO 1</span>
                        <i className="las la-angle-right"></i>
                    </Div>
                    <Div>
                        <span>FAQ NUMERO 1</span>
                        <i className="las la-angle-right"></i>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
