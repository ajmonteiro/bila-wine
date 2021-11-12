import React, { useEffect, useState } from "react";
import api from "../../Data/Api";
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
    Image,
} from "../../Layout/Layout";
import { ToastError, ToastSuccess } from "../../Layout/Toast";
import DashboardLayout from "../Layout/DashboardLayout";
import { baseURL } from "../../Data/Api";

export default function Admin() {
    return (
        <>
            <DashboardLayout />
        </>
    );
}

export function CategoryPage() {
    const [visible, setvisible] = useState<"create" | "list">("list");
    return (
        <>
            <Div className="flex justify-start items-center mt-3">
                <Title
                    title={"CATEGORIES"}
                    className="font-bold text-4xl text-gray-700"
                />
            </Div>
            <Div className="flex justify-start items-center">
                <Button
                    onclick={() => setvisible("create")}
                    text="Create new"
                />
                <Button onclick={() => setvisible("list")} text="List" />
            </Div>
            {visible == "create" ? <Create visible={setvisible} /> : <List />}
        </>
    );
}

export function List() {
    const [categories, setcategories] = useState<any>();

    useEffect(() => {
        getCategories();
    }, []);

    function getCategories(page: number = 1) {
        api.get("/api/categories/paginate", {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setcategories(res.data.categories);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <Div className="flex justify-center">
                <Table>
                    <TableHead>
                        <TableHeader text="ID" />
                        <TableHeader text="Name" />
                    </TableHead>
                    <TableBody>
                        {categories &&
                            categories.data.map(
                                (item: {
                                    id: React.Key;
                                    name: string;
                                }) => (
                                    <TableRow key={item.id}>
                                        <TableData content={item.id} />
                                        <TableData content={item.name} />
                                    </TableRow>
                                )
                            )}
                    </TableBody>
                </Table>
            </Div>
            <Div className="flex justify-center">
                {/* <Paginate onChange={() => null} activePage={0} /> */}
            </Div>
        </>
    );
}

export function Create(props: any) {
    const [name, setname] = useState<any>();

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);

        api.post(`/api/category`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                ToastSuccess("Succesfully added", "bottom-right");
                props.visible("list");
            })
            .catch((err) => {
                ToastError();
            });
    }
    return (
        <>
            <Div className="w-full mt-5">
                <Div className="bg-white rounded-lg shadow">
                    <Div className="px-4 py-8 flex justify-start sm:px-10">
                        <Div className="w-full mt-6">
                            <Form>
                                <Input
                                    type="text"
                                    onChange={(e) => setname(e)}
                                    value={name}
                                    placeholder="Title"
                                />
                                <Div className="flex justify-end">
                                    <Button
                                        text="Create"
                                        onclick={(e: any) => create(e)}
                                    />
                                </Div>
                            </Form>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
