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
                <Div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <Div className="relative sm:max-w-sm w-full">
                        <Div className="card bg-red-900 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></Div>
                        <Div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></Div>
                        <Div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <Div className="flex justify-center m-5">
                                <Title
                                    title={"BILAWINE"}
                                    className="text-2xl font-bold"
                                />
                            </Div>
                            <Form>
                                <Div>
                                    <Input
                                        type="email"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={(e) => setemail(e)}
                                    />
                                </Div>

                                <Div className="">
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setpassword(e)}
                                    />
                                </Div>

                                <Div className="flex">
                                    <Div className="w-full text-right">
                                        <a
                                            className="underline text-sm text-gray-600 hover:text-gray-900"
                                            href="#"
                                        >
                                            Forgot your password?
                                        </a>
                                    </Div>
                                </Div>

                                <Div className="mt-7">
                                    <Div className="flex justify-center">
                                        <Button
                                            text="Submit"
                                            onclick={(e: any) => login(e)}
                                        />
                                    </Div>
                                </Div>
                                <Div className="mt-7">
                                    <Div className="flex justify-center items-center">
                                        <Paragraph
                                            className="mr-2"
                                            text={"New user?"}
                                        />
                                        <Button
                                            className="text-red-500 transition duration-500
                                         ease-in-out  transform hover:-translate-x hover:scale-105"
                                            text={"Register"}
                                            onclick={(e: any) =>
                                                props.visible("register")
                                            }
                                        />
                                    </Div>
                                </Div>
                            </Form>
                        </Div>
                    </Div>
                </Div>
            )}
        </>
    );
}
