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
                    <div
                        style={{
                            background: `url("static/main-page.jpeg")`,
                            width: "100%",
                            height: "300px",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <Div className="about-bilawine-content">
                        <Title
                            title={"SOBRE BILAWINE"}
                            className="text-3xl font-bold"
                        />
                        <span className="text-xl font-bold">
                            HISTÓRIA DA MARCA
                        </span>
                        <p className="mt-5" style={{
                            lineHeight: '3rem'
                        }}>
                            A marca 𝐁𝐢𝐥𝐚 𝐖𝐢𝐧𝐞 surgiu no ano letivo 2021/2022,
                            pelos alunos da licenciatura de Comunicação e
                            multimédia, no âmbito da unidade curricular Projeto
                            Multimédia. A empresa terá como foco principal
                            eventos de 𝐝𝐞𝐠𝐮𝐬𝐭𝐚𝐜̧𝐚̃𝐨 𝐝𝐞 𝐯𝐢𝐧𝐡𝐨𝐬. Além dessa
                            experiência os clientes poderão ainda contar com uma
                            loja de vinhos, com produtos de qualidade e
                            vouchers. A empresa 𝐁𝐢𝐥𝐚 𝐖𝐢𝐧𝐞 pretende marcar pela
                            diferença nos seus eventos, forma como trabalha e
                            qualidade dos produtos e de toda a equipa.
                            𝘋𝘦𝘴𝘤𝘰𝘣𝘳𝘦-𝘵𝘦 𝘯𝘦𝘴𝘵𝘢 𝘦𝘹𝘱𝘦𝘳𝘪𝘦̂𝘯𝘤𝘪𝘢!
                        </p>
                    </Div>
                </Div>
            </Div>
            <Footer />
        </>
    );
}
