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

    // const [newsletters, setnewsletters] = useState<any>();
    // const [name, setName] = useState<any>();

    // function getNewsletter(page = 1) {
    //     api.get(`/api/newsletters/paginate?page=${page}`, {
    //         headers: { Authorization: `Bearer ${getToken()}` },
    //     }).then((res) => {
    //         setnewsletters(res.data.newsletters);
    //     });
    // }

    // useEffect(() => {
    //     getNewsletter();
    // }, []);

    function sendNewsletter() {

    }

    function create(e: any) {}

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
                        <div
                            style={{
                                border: "1px solid black",
                                padding: "2px",
                                minHeight: "400px",
                            }}
                        >
                        </div>
                        <button onClick={() => sendNewsletter()}>Enviar</button>
                    </Div>
                    </Div>
                    </Div>
                    <Div className="users">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">Categorias</h2>
                            </Div>
                            <Div className="card-body">
                                <Div className="customer">
                                    <Div className="info">
                                        <table className="table-responsive w-full">
                                            <thead>
                                                <tr>
                                                    <td>#</td>
                                                    <td>Nome</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                            </tbody>
                                        </table>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    </Div>
            </main>
        </>
    );
}
