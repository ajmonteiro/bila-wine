import React, { useState, useEffect } from "react";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, ButtonForm, Div } from "../Layout/Layout";
import { ToastError, ToastSuccess } from "../Layout/Toast";

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
        api.post(`/api/user/update`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            ToastSuccess();
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
                        <ButtonForm
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
    const [actualPassword, setActualPassword] = useState<any>();
    const [newPassword, setNewPassword] = useState<any>();
    const [repeatPassword, setRepeatPassword] = useState<any>();

    function handleChangePwd(e: any) {
        e.preventDefault();

        const form = new FormData();

        form.append(`actualPassword`, actualPassword);
        form.append(`newPassword`, newPassword);
        form.append(`repeatPassword`, repeatPassword);

        api.post(`/api/changePassword`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                ToastSuccess(res.data.message);
            })
            .catch((err) => {
                ToastError(err.response.message);
            });
    }
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
                        <input
                            type="password"
                            value={actualPassword}
                            onChange={(e) => setActualPassword(e.target.value)}
                        />
                    </Div>
                    <Div></Div>
                    <Div>
                        <label htmlFor="surname">Nova palavra-passe</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Div>
                    <Div>
                        <label htmlFor="name">Repetir palavra-passe</label>
                        <input
                            type="password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                    </Div>
                    <Div>
                        <ButtonForm
                            text="GUARDAR ALTERAÇÕES"
                            onclick={(e) => handleChangePwd(e)}
                        />
                    </Div>
                </Div>
            </Div>
        </>
    );
}
