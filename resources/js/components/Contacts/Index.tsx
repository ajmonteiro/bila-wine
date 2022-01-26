import React, { useState, useEffect } from "react";
import TopMenu from "../Layout/Menu";
import { Button, ButtonForm, Div, Input, Title } from "../Layout/Layout";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { ToastSuccess } from "../Layout/Toast";
export default function Contacts() {
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
                        <Title title={"CONTACTOS"} className="text-3xl" />
                        <span>
                            Precisa de ajuda? Respondemos a todas as suas
                            perguntas.
                        </span>
                        <Div className="contacts-flex-bi">
                            <Div className="contacts-grid-bilawine mt-10 flex flex-col">
                                <Div>
                                    <h1 className="text-xl font-semibold">
                                        LINHA DE APOIO AO CLIENTE
                                    </h1>
                                    <span>
                                        Sabia que a BilaWine tem uma linha de
                                        apoio ao cliente?
                                    </span>
                                    <ul className="mt-6 ml-10 ul-for-contacts">
                                        <li>Informação geral da BilaWine</li>
                                        <li>
                                            Informação de campanhas e produtos
                                        </li>
                                        <li>Pós-venda</li>
                                    </ul>
                                </Div>
                                <Div className="contacts-contacts-pt">
                                    <Div className="contacts-c-pt">
                                        <h1 className="font-semibold text-xl">
                                            <b>PORTUGAL</b> E ESTRANGEIRO
                                        </h1>
                                        <div>
                                            <span className="text-2xl">
                                                210 155 222
                                            </span>
                                            <p style={{ fontSize: "0.7rem" }}>
                                                (Chamada para a rede fixa
                                                nacional)
                                            </p>
                                        </div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <ContactForm />
                    </Div>
                </Div>
            </Div>
        </>
    );
}

export function ContactForm() {
    const [name, setName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [message, setMessage] = useState<any>();

    function handleSubmit(e: any) {
        const form = new FormData();
        form.append("name", name);
        form.append("email", email);
        form.append("message", message);
        form.append("image", baseURL() + "/storage/logo.png");
        api.post(`/api/contact_us`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            ToastSuccess();
        });
    }

    return (
        <>
            <Div className="userdata-div mt-10">
                <Div>
                    <input
                        value={name}
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome completo"
                    />
                </Div>
                <Div>
                    <input
                        value={email}
                        type={"text"}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </Div>
                <Div>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mensagem"
                    ></textarea>
                </Div>
                <Div className="flex justify-start">
                    <ButtonForm text="Submeter" onclick={(e) => handleSubmit(e)} />
                </Div>
            </Div>
        </>
    );
}
