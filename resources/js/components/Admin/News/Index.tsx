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

export default function Gifts() {
    const [news, setNews] = useState<any>();
    const [title, setTitle] = useState<any>();
    const [description, setDescription] = useState<any>();

    function getNews(page = 1) {
        api.get(`/api/news/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setNews(res.data.news);
        });
    }

    useEffect(() => {
        getNews();
    }, []);

    function create(e: any) {
        const form = new FormData();
        form.append("title", title);
        form.append("description", description);

        api.post(`/api/gift`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            getNews()
        });
    }

    return (
        <>
            <main>
                <Div className="recent-grid">
                    <Div className="products">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">Nova novidade</h2>
                            </Div>
                            <Div className="card-body">
                                <Div>
                                    <Input
                                        placeholder={"Nome"}
                                        value={name}
                                        type={"text"}
                                        onChange={(e) => setTitle(e)}
                                    />
                                </Div>
                                <Div>
                                    <Input
                                        placeholder={"Descrição"}
                                        value={description}
                                        type={"text"}
                                        onChange={(e) => setDescription(e)}
                                    />
                                </Div>
                                <button onClick={(e) => create(e)}>
                                    Enviar
                                </button>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="users">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">Novidades</h2>
                            </Div>
                            <Div className="card-body">
                                <Div className="customer">
                                    <Div className="info">
                                        <table className="table-responsive w-full">
                                            <thead>
                                                <tr>
                                                    <td>#</td>
                                                    <td>Voucher</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {news?.data.map(
                                                    (item: any) => (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>
                                                                {item.voucher}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
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
