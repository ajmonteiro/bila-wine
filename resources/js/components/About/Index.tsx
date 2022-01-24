import React, { useState, useEffect } from "react";
import Footer from "../Layout/Footer";
import { Div, Title } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";

export default function About() {
    return (
        <>
            <TopMenu />
            <Div className="about-bilawine-wrapper">
                <Div className="about-bilawine-div">
                    <div style={{
                        background: `url("static/main-page.jpeg")`,
                        width: '100%',
                        height: '300px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                    <Div className="about-bilawine-content">
                        <Title title={"SOBRE BILAWINE"} className="text-3xl font-bold" />
                        <span className="text-xl font-bold">HISTÓRIA DA MARCA</span>
                        <p className="mt-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </Div>
                </Div>
            </Div>
            <Footer />
        </>
    );
}
