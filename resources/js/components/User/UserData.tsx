import React, { useState, useEffect } from "react";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div } from "../Layout/Layout";

export default function UserData() {
    const [username, setUsername] = useState<any>();
    const [email, setEmail] = useState<any>();

    useEffect(() => {
        api.get(`/api/authuser`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setUsername(res.data.user.name);
                setEmail(res.data.user.email);
            })
            .catch((err) => console.log(err.response));
    }, []);

    function updateUserInfo() {
        const form = new FormData();
        form.append("username", username);
        form.append("email", email);
        api.post(`/api/infofromuser`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
        });
    }
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">Dados pessoais</h3>
                </Div>
                <Div className="userdata-div">
                    <Div>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="name">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Div>
                    <Div>
                        <Button
                            text="GUARDAR ALTERAÇÕES"
                            onclick={() => updateUserInfo()}
                        />
                    </Div>
                </Div>
            </Div>
        </>
    );
}

export function UpdatePwd() {
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">
                        Alterar palavra-passe
                    </h3>
                </Div>
                <Div className="userdata-div">
                    <Div>
                        <label htmlFor="name">Palavra-passe atual</label>
                        <input type="password" />
                    </Div>
                    <Div></Div>
                    <Div>
                        <label htmlFor="surname">Nova palavra-passe</label>
                        <input type="password" />
                    </Div>
                    <Div>
                        <label htmlFor="name">Repetir palavra-passe</label>
                        <input type="password" />
                    </Div>
                    <Div>
                        <Button text="GUARDAR NOVA PALAVRA-PASSE" />
                    </Div>
                </Div>
            </Div>
        </>
    );
}
