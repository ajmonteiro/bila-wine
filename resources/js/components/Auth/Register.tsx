import React, { useState } from "react";
import { api } from "../Data/Api";
import { Button, Div, Form, Input, Paragraph, Title } from "../Layout/Layout";
import { ToastSuccess } from "../Layout/Toast";

interface VisibleProps {
    visible: (e: any) => any;
}

export default function Register(props: VisibleProps) {
    const [username, setusername] = useState<any>();
    const [email, setemail] = useState<any>();
    const [password, setpassword] = useState<any>();
    const [image, setimage] = useState<any>();

    function changeHandler(e: any) {
        setimage(e.target.files[0]);
    }

    function register(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("name", username);
        form.append("email", email);
        form.append("password", password);
        form.append("image", image);

        api.post(`/api/register`, form)
            .then((res) => {
                ToastSuccess();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
                <div className="flex justify-center w-96 font-bold text-3xl">
                    BILAWINE
                </div>

                <div className="bg-white w-96 shadow-xl rounded p-5">
                    <h1 className="text-3xl font-medium">Registo</h1>
                    <p className="text-sm">
                        Introduza os seus dados de registo
                    </p>
                    <form className="space-y-5 mt-5">
                        <input
                            type="text"
                            className="w-full h-12 border border-red-800 rounded px-3"
                            placeholder="Username"
                            value={username}
                            onChange={(e: any) => setusername(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-full h-12 border border-red-800 rounded px-3"
                            placeholder="Email"
                            value={email}
                            onChange={(e: any) => setemail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full h-12 border rounded px-3"
                            style={{
                                borderColor: "#a45459",
                            }}
                            placeholder="Password"
                            value={password}
                            onChange={(e: any) => setpassword(e.target.value)}
                        />
                        <input
                            type="file"
                            className="w-full h-12 border rounded py-2 px-3"
                            style={{
                                borderColor: "#a45459",
                            }}
                            onChange={(e) => changeHandler(e)}
                        />
                        <button
                            onClick={(e) => register(e)}
                            className="text-center w-full rounded-full text-white py-3 font-medium"
                            style={{
                                backgroundColor: "#a45459",
                            }}
                        >
                            Registar
                        </button>
                    </form>
                </div>

                <p onClick={(e) => props.visible("login")}>
                    <a
                        href="#!"
                        className="font-medium ml-2"
                        style={{
                            color: "#a45459",
                        }}
                    >
                        Login
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
    );
}
