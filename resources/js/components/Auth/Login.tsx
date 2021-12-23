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
                <>
                    <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
                        <div className="flex justify-center w-96 font-bold text-3xl">
                            BILAWINE
                        </div>

                        <div className="bg-white w-96 shadow-xl rounded p-5">
                            <h1 className="text-3xl font-medium">Login</h1>
                            <p className="text-sm">
                                Introduza os seus dados de acesso
                            </p>
                            <form className="space-y-5 mt-5">
                                <input
                                    type="text"
                                    className="w-full h-12 border border-red-800 rounded px-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e: any) =>
                                        setemail(e.target.value)
                                    }
                                />
                                <input
                                    type="password"
                                    className="w-full h-12 border border-red-800 rounded px-3"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e: any) =>
                                        setpassword(e.target.value)
                                    }
                                />

                                <div className="">
                                    <a
                                        href="#!"
                                        className="font-medium text-red-700 hover:bg-red-300 rounded-full p-2"
                                    >
                                        Esqueceu-se da palavra-passe?
                                    </a>
                                </div>

                                <button
                                    onClick={(e) => login(e)}
                                    className="text-center w-full bg-red-700 rounded-full text-white py-3 font-medium"
                                >
                                    Login
                                </button>
                            </form>
                        </div>

                        <p>
                            Novo utilizador?
                            <a
                                href="#!"
                                className="text-red-700 font-medium ml-2"
                            >
                                Registe-se
                            </a>{" "}
                        </p>
                    </div>
                    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                        <div>
                            <a
                                title="Buy me a beer"
                                href="https://www.buymeacoffee.com/emichel"
                                target="_blank"
                                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                            >
                                <img
                                    className="object-cover object-center w-full h-full rounded-full"
                                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fst2.depositphotos.com%2F1454412%2F5924%2Fi%2F110%2Fdepositphotos_59246729-Big-red-question-mark-button.jpg&f=1&nofb=1"
                                />
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
