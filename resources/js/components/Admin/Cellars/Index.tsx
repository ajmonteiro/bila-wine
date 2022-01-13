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

export default function Adegas() {
    const [Adegas, setAdegas] = useState<any>();
    const [title, setTitle] = useState<any>();
    const [description, setDescription] = useState<any>();
    const [locationId, setLocationId] = useState<any>();
    const [image, setImage] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [locations, setLocation] = useState<any>();

    function getAdegas(page = 1) {
        api.get(`/api/cellars?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setAdegas(res.data.cellars);
        });
    }

    function changeHandler(e: any) {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        getLocations();
        getAdegas();
    }, []);

    function getLocations() {
        api.get(`/api/locations`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setLocation(res.data.locations);
            setLocationId(res.data.locations[0].id);
        });
    }

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("title", title);
        form.append("description", description);
        form.append("price", price);
        form.append("location_id", locationId);
        form.append("image", image);

        api.post(`/api/cellar`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                getAdegas();
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
                                <h2 className="text-2xl">Adicionar adega</h2>
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
                                <Div className="flex justify-center">
                                    <input
                                        type="file"
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    <select
                                        onChange={(e) =>
                                            setLocationId(e.target.value)
                                        }
                                    >
                                        {locations &&
                                            locations.map(
                                                (item: {
                                                    id: number;
                                                    name: string;
                                                }) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                )
                                            )}
                                    </select>
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
                                <h2 className="text-2xl">Adegas</h2>
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
                                                {Adegas?.data.map(
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
