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

export default function Categories() {
    const [Categories, setCategories] = useState<any>();
    const [name, setName] = useState<any>();

    function getCategories(page = 1) {
        api.get(`/api/categories/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setCategories(res.data.categories);
        });
    }

    useEffect(() => {
        getCategories();
    }, []);

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);

        api.post(`/api/category`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                getCategories();
                ToastSuccess("Succesfully added", "bottom-right");
            })
            .catch((err) => {
                ToastError();
            });
    }
    return (
        <>
            <main>
                <Div className="recent-grid">
                    <Div className="products">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">
                                    Adicionar categoria
                                </h2>
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
                                <Div className="mt-5 flex justify-end">
                                    <button onClick={(e) => create(e)}>
                                        Criar
                                    </button>
                                </Div>
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
                                                {Categories?.data.map(
                                                    (item: any) => (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
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
