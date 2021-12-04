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

export default function Location() {
    const [Locations, setLocations] = useState<any>();
    const [name, setName] = useState<any>();

    function getLocations(page = 1) {
        api.get(`/api/locations/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setLocations(res.data.locations);
        });
    }

    useEffect(() => {
        getLocations();
    }, []);

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);

        api.post(`/api/location`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                getLocations();
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
                                    Adicionar localização
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
                                <h2 className="text-2xl">Localizações</h2>
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
                                                {Locations?.data.map(
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
