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
                <Div>
                    <Div className="w-full bg-black h-screen flex justify-center items-center">
                            <Div className="flex items-center justify-center ">
                                <Div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                                    <Div className="flex justify-center">
                                        <Title
                                            className="text-white text-3xl font-bold"
                                            title={"BILAWINE"}
                                        />
                                    </Div>
                                    <Input
                                        type="text"
                                        placeholder="E-mail"
                                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-white-600 placeholder-white-500 text-white"
                                        value={email}
                                        onChange={(e) => setemail(e)}
                                    />
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-white-600 placeholder-white-500 text-white"
                                        value={password}
                                        onChange={(e) => setpassword(e)}
                                    />
                                    <Button
                                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-white-900 placeholder-white-500 text-white"
                                        text="Login"
                                        onclick={(e: any) => login(e)}
                                    />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
            )}
        </>
    );
}
