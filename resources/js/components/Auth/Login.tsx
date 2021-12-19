import React, { useState } from "react";
import { useHistory } from "react-router";
import api, { baseURL } from "../Data/Api";
import {
    Button,
    Div,
    Form,
    Input,
    Link,
    Paragraph,
    Title,
} from "../Layout/Layout";
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
                <Div className={"login-page"}>
                    <Div className={"login-div"}>
                        <Div className={"login-card"}>
                            <Div className={"login-header"}>
                                <img src={baseURL() + '/storage/logo.png'} width="200"/>
                            </Div>
                            <Div className={"login-body"}>
                                <Div className={"input-div"}>
                                    <Div>
                                        <Input
                                            placeholder={"E-mail"}
                                            className={"input-login"}
                                            value={email}
                                            type={"text"}
                                            onChange={(e) => setemail(e)}
                                        />
                                    </Div>
                                </Div>
                                <Div className={"input-div"}>
                                    <Div>
                                        <Input
                                            placeholder={"Palavra-passe"}
                                            className={"input-login"}
                                            value={password}
                                            type={"password"}
                                            onChange={(e) => setpassword(e)}
                                        />
                                    </Div>
                                </Div>
                                <Link path="/" className={"login-link"}>
                                    Esqueceu-se da palavra-passe?
                                </Link>
                                <Button
                                    text={"Entrar"}
                                    className={"login-button"}
                                    onclick={(e) => login(e)}
                                />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            )}
        </>
    );
}
