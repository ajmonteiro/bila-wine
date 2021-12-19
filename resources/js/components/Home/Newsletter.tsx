import React, { useState } from "react";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div } from "../Layout/Layout";
import { ToastSuccess } from "../Layout/Toast";

export default function Newsletter() {
    const [email, setEmail] = useState<any>();

    function submitNewsletter() {
        const form = new FormData();

        form.append(`email`, email);
        api.post(`/api/newsletter`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            ToastSuccess('Obrigado por subscrever', 'top-center');
        });
    }

    return (
        <>
            <Div className="w-full z-0 px-6">
                <Div className="relative bg-red-600 text-white flex items-center justify-center pt-12 sm:pt-12 pb-12 sm:pb-12 md:pb-12 lg:pb-12 xl:pb-12">
                    <Div className="newsletter-div">
                        <Div className="left-side-newsletter">
                            <h1 className="text-3xl">
                                ASSINE A NOSSA NEWSLETTER
                            </h1>
                            <p>Fique a par de todas as nossas novidades!</p>
                        </Div>
                        <Div className="flex newsletter-form text-black">
                            <Div className="relative conjunto-newsletter">
                                <input
                                    type="text"
                                    className="h-14 w-96 pl-10 pr-20 z-0 focus:shadow focus:outline-none"
                                    placeholder="Introduza o seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Div className="absolute  top-2 right-2">
                                    <button className="h-10 w-24 text-white bg-red-600 hover:bg-red-700" onClick={() => submitNewsletter()}>
                                        Subscrever
                                    </button>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
          
        </>
    );
}
