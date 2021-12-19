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
    const [gifts, setGifts] = useState<any>();
    const [name, setName] = useState<any>();
    const [description, setDescription] = useState<any>();

    function getGifts(page = 1) {
        api.get(`/api/gifts/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setGifts(res.data.gifts);
        });
    }

    useEffect(() => {
        getGifts();
    }, []);

    function create(e: any) {
        const form = new FormData();
        form.append("name", name);
        form.append("description", description);

        api.post(`/api/gift`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            getGifts()
        });
    }

    return (
        <>
            <main>
                <Div className="recent-grid">
                    <Div className="products">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">Novo Presente</h2>
                            </Div>
                            <Div className="card-body">
                                <Div>
                                    <Input
                                        placeholder={"Nome"}
                                        value={name}
                                        type={"text"}
                                        onChange={(e) => setName(e)}
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
                                <h2 className="text-2xl">Presentes</h2>
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
                                                {gifts?.data.map(
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
