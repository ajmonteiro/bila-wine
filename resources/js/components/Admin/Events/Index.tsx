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

export default function Events() {
    const [Eventos, setEventos] = useState<any>();
    const [title, setTitle] = useState<any>();
    const [description, setDescription] = useState<any>();
    const [image, setImage] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [duration, setDuration] = useState<any>();
    const [personNumber, setPersonNumber] = useState<any>();

    function getEventos(page = 1) {
        api.get(`/api/events/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setEventos(res.data.events);
        });
    }

    function changeHandler(e: any) {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        getEventos();
    }, []);

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("title", title);
        form.append("description", description);
        form.append("image", image);
        form.append("price", price);
        form.append("duration", duration);
        form.append("person_number", personNumber);
    
        api.post(`/api/event`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                ToastSuccess("Succesfully added", "bottom-right");
                getEventos();
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
                                <h2 className="text-2xl">Adicionar evento</h2>
                            </Div>
                            <Div className="card-body">
                                <Div>
                                    <Input
                                        placeholder={"Nome"}
                                        value={title}
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
                                <Div>
                                    <Input
                                        placeholder={"Preço"}
                                        value={price}
                                        type={"text"}
                                        onChange={(e) => setPrice(e)}
                                    />
                                </Div>
                                <Div>
                                    <Input
                                        placeholder={"Número de pessoas"}
                                        value={personNumber}
                                        type={"text"}
                                        onChange={(e) => setPersonNumber(e)}
                                    />
                                </Div>
                                <Div>
                                    <Input
                                        placeholder={"Duração"}
                                        value={duration}
                                        type={"text"}
                                        onChange={(e) => setDuration(e)}
                                    />
                                </Div>
                                <Div>
                                    <input type="file" onChange={(e) => changeHandler(e)}/>
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
                                <h2 className="text-2xl">Eventos</h2>
                            </Div>
                            <Div className="card-body">
                                <Div className="customer">
                                    <Div className="info">
                                        <table className="table-responsive w-full">
                                            <thead>
                                                <tr>
                                                    <td>#</td>
                                                    <td>Nome</td>
                                                    <td>Preço</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Eventos?.data.map(
                                                    (item: any) => (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.title}</td>
                                                            <td>
                                                                {item.price +
                                                                    "€"}
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
