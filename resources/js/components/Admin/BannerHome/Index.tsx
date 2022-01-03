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

export default function BannerHome() {
    const [title, setTitle] = useState<any>();
    const [subTitle, setSubtitle] = useState<any>();
    const [image, setImage] = useState<any>();
    const [banners, setbanners] = useState<any>();

    function getBannerList(page = 1) {
        api.get(`/api/categories/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setbanners(res.data.banners);
        });
    }

    function changeHandler(e: any) {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        getBannerList();
    }, []);

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("title", title);
        form.append("subtitle", subTitle);
        form.append("image", image)

        api.post(`/api/banner`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                getBannerList();
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
                                <h2 className="text-2xl">Adicionar banner</h2>
                            </Div>
                            <Div className="card-body">
                                <Div>
                                    <Input
                                        placeholder={"Título"}
                                        value={title}
                                        type={"text"}
                                        onChange={(e) => setTitle(e)}
                                    />
                                </Div>
                                <Div>
                                    <Input
                                        placeholder={"Subtítulo"}
                                        value={subTitle}
                                        type={"text"}
                                        onChange={(e) => setSubtitle(e)}
                                    />
                                </Div>
                                <Div>
                                    <input
                                        type="file"
                                        onChange={(e) => changeHandler(e)}
                                    />
                                </Div>
                                <Div className="mt-5 flex justify-end">
                                    <button onClick={(e) => create(e)}>
                                        Adicionar
                                    </button>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="users">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">Banners</h2>
                            </Div>
                            <Div className="card-body">
                                <Div className="customer">
                                    <Div className="info">
                                        <table className="table-responsive w-full">
                                            <thead>
                                                <tr>
                                                    <td>#</td>
                                                    <td>Título</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {banners?.data.map(
                                                    (item: any) => (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.title}</td>
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
