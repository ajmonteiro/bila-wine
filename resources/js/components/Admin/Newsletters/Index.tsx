import React, { useEffect, useState } from "react";
import api, { baseURL } from "../../Data/Api";
import { getToken } from "../../Data/Auth";
import {
    Button,
    Div,
    Form,
    Input,
    Link,
    Table,
    TableBody,
    TableData,
    TableHead,
    TableHeader,
    TableRow,
    Title,
} from "../../Layout/Layout";
import { ToastError, ToastSuccess } from "../../Layout/Toast";
import DashboardLayout from "../Layout/DashboardLayout";

export default function Newsletters() {
    const [text, setText] = useState<any>();


    function sendNewsletter(e: any) {
        const form = new FormData
        form.append(`text`, text)

        api.post(`/api/sendNewsletter`, form, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            ToastSuccess
        })
    }

    return (
        <>
            <main>
                <Div className="recent-grid">
                    <Div className="products">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">
                                    Enviar nova newsletter
                                </h2>
                            </Div>
                            <Div className="card-body">
                                <div className="flex justify-center">
                                    <textarea
                                        className="rounded-lg border-transparent flex-1 m-3 appearance-none
                            border border-gray-300 w-full py-2 px-4 bg-white
                            text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none
                            focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        value={text}
                                        onChange={(e) =>
                                            setText(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                <button onClick={(e) => sendNewsletter(e)}>
                                    Enviar
                                </button>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </main>
        </>
    );
}
