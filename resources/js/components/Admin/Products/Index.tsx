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

export default function Products() {
    const [products, setProducts] = useState<any>();
    const [name, setName] = useState<any>();
    const [description, setDescription] = useState<any>();
    const [bigDescription, setBigDescription] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [image, setImage] = useState<any>();
    const [categories, setcategories] = useState<any>();
    const [idcategory, setidcategory] = useState<any>();

    function getProducts(page = 1) {
        api.get(`/api/products/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setProducts(res.data.products);
        });
    }

    function changeHandler(e: any) {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    function getCategories() {
        api.get(`/api/categories`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setcategories(res.data.categories);
            setidcategory(res.data.categories[0].id);
        });
    }

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);
        form.append("description", description);
        form.append("bigdescription", bigDescription);
        form.append("price", price);
        form.append("id_category", idcategory);
        form.append("image", image);

        api.post(`/api/product`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                getProducts();
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
                                <h2 className="text-2xl">Adicionar produto</h2>
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
                                <Div>
                                    <Input
                                        placeholder={
                                            "Descrição [3000 caracteres]"
                                        }
                                        value={bigDescription}
                                        type={"text"}
                                        onChange={(e) => setBigDescription(e)}
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
                                            setidcategory(e.target.value)
                                        }
                                    >
                                        {categories &&
                                            categories.map(
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
                                <h2 className="text-2xl">Produtos recentes</h2>
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
                                                {products?.data.map(
                                                    (item: any) => (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
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
