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
            ToastSuccess("Obrigado por subscrever", "top-center");
        });
    }

    return (
        <>
            <Div className="newsletter">
                <Div className="newsletter-div">
                    <Div className="newsletter-grid">
                        <Div className="newsletter-div-fi">
                            <span>
                                Subscreva a nossa newsletter e fique a par de
                                tudo
                            </span>
                        </Div>
                        <Div>
                            <input
                                style={{
                                    color: 'black'
                                }}
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="newsletter-button" onClick={() => submitNewsletter()}>Subscrever</button>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
