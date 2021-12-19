import React, { useState, useEffect } from "react";
import TopMenu from "../Layout/Menu";
import { Button, Div } from "../Layout/Layout";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
export default function Contacts() {
    const [name, setName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [message, setMessage] = useState<any>();

    function handleSubmit(e: any) {
        const form = new FormData
        form.append('name', name)
        form.append('email', email)
        form.append('message', message)
        form.append('image', baseURL()+'/storage/logo.png')
        api.post(`/api/contact_us`, form, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            console.log(res)
        });
    }
    return (
        <>
            <TopMenu />
            <Div className="max-w-screen-xl mt-2 mb-8 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <Div className="flex flex-col justify-between">
                    <Div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Fale connosco!
                        </h2>
                        <Div className="text-gray-700 mt-8">
                            Não gosta de formulários? Envie-nos um email invés.
                        </Div>
                        <Div className="mapouter">
                            <Div className="gmap_canvas">
                                <iframe
                                    width="400"
                                    height="400"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Rua%20da%20Estreada,%20N6,%20Vila%20seca&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                ></iframe>
                                <a href="/"></a>
                                <br />
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="">
                    <Div>
                        <span className="uppercase text-sm text-gray-600 font-bold">
                            Nome completo
                        </span>
                        <input
                            className="w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Div>
                    <Div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">
                            Email
                        </span>
                        <input
                            className="w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Div>
                    <Div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">
                            Mensagem
                        </span>
                        <textarea
                            className="w-full h-32 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </Div>
                    <Div className="mt-8">
                        <Button
                            text="Enviar mensagem"
                            onclick={(e) => handleSubmit(e)}
                            className="uppercase text-sm font-bold tracking-wide bg-red-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        />
                    </Div>
                </Div>
            </Div>
        </>
    );
}
