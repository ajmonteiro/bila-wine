import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../Data/Api";
import { Button, Div, Form, Input, Paragraph, Title } from "../Layout/Layout";
import { loginlocal } from "../Data/Auth";
import { getToken } from "../Data/Auth";
import { ToastError } from "../Layout/Toast";

interface VisibleProps {
    visible: (e: any) => any;
}
export default function Login(props: VisibleProps) {
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const history = useHistory();
    const token = getToken();

    function login(e: any) {
        e.preventDefault();
        const url = `/api/login`;
        const form = new FormData();

        form.append("email", email);
        form.append("password", password);

        api.defaults.withCredentials = true;

        api.get("/sanctum/csrf-cookie").then(() => {
            api.post(url, form)
                .then((res: any) => {
                    if (res.data.user) {
                        loginlocal(res.data.token);
                        history.push(`/`, console.log(res));
                    }
                })
                .catch((err) => {
                    if (err.response.data.errors.email[0]) {
                        ToastError(err.response.data.errors.email[0]);
                    }
                    if (err.response.data.errors.password[0]) {
                        ToastError(err.response.data.errors.password[0]);
                    }
                });
        });
    }
    return (
        <>
            {token ? (
                history.push("/")
            ) : (
                <Div className={'login-page'}>
                    <Div className={'login-card'}>
                        <Div className={'login-header'}>
                            <img src={''} alt={''} />
                        </Div>
                        <Div className={'login-body'}>

                        </Div>
                    </Div>
                </Div>
            )}
        </>
    );
}
