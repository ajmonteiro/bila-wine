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
            <Div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <Div className="relative sm:max-w-sm w-full">
                    <Div className="card bg-red-900 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></Div>
                    <Div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></Div>
                    <Div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <Form>
                            <Div className="flex justify-center m-5">
                                <Title
                                    title={"BILAWINE"}
                                    className="text-2xl font-bold"
                                />
                            </Div>
                            <Input
                                type="text"
                                value={username}
                                placeholder="Username"
                                onChange={(e: any) => setusername(e)}
                            />
                            <Input
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e: any) => setemail(e)}
                            />
                            <Input
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e: any) => setpassword(e)}
                            />
                            <Input
                                type="file"
                                value={image}
                                onChange={(e: any) => console.log(e)}
                            />
                            <Div className="flex justify-center">
                                <Button
                                    text="Register"
                                    onclick={(e: any) => register(e)}
                                />
                            </Div>

                            <Div className="flex justify-center">
                                <Paragraph
                                    text="Do you already have an account?"
                                    className="mr-2"
                                />
                                <Button
                                    text="Login"
                                    className="text-red-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                    onclick={(e: any) => props.visible("login")}
                                />
                            </Div>
                        </Form>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
