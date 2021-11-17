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
} from "../../Layout/Layout";
import { ToastError, ToastSuccess } from "../../Layout/Toast";
import DashboardLayout from "../Layout/DashboardLayout";

export default function Admin() {
    return (
        <>
            <DashboardLayout />
        </>
    );
}

export function ProductPage() {
    const [visible, setvisible] = useState<"create" | "list">("list");
    return (
        <>
            <Div className="flex justify-start items-center mt-3">
                <Title
                    title={"PRODUCTS"}
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
    const [products, setproducts] = useState<any>();

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts(page: number = 1) {
        api.get("/api/products/paginate", {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setproducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <Div className="flex justify-start text-center">
                <Table>
                    <TableHead>
                        <TableHeader text="ID" />
                        <TableHeader text="Name" />
                        <TableHeader text="Category" />
                        <TableHeader text="Description" />
                        <TableHeader text="Big Description" />
                        <TableHeader text="Price" />
                    </TableHead>
                    <TableBody>
                        {products &&
                            products.data.map(
                                (item: {
                                    id: React.Key | null | undefined;
                                    name: any;
                                    description: string;
                                    big_description: string;
                                    price: any;
                                    category_name: string
                                }) => (
                                    <TableRow key={item.id}>
                                        <TableData content={item.id} />
                                        <TableData content={item.name} />
                                        <TableData content={item.category_name} />
                                        <TableData content={item.description} />
                                        <TableData
                                            content={item.big_description}
                                        />
                                        <TableData content={item.price} />
                                    </TableRow>
                                )
                            )}
                    </TableBody>
                </Table>
            </Div>
        </>
    );
}

export function Create(props: any) {
    const [name, setname] = useState<any>();
    const [price, setprice] = useState<any>();
    const [description, setdescription] = useState<any>();
    const [bigdescription, setbigdescription] = useState<any>();
    const [categories, setcategories] = useState<any>();
    const [idcategory, setidcategory] = useState<any>();
    const [image, setimage] = useState<any>();

    function changeHandler(e: any) {
        setimage(e.target.files[0]);
    }

    useEffect(() => {
        getCategories();
    }, []);
    function getCategories() {
        api.get(`/api/categories`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
            setcategories(res.data.categories);
        });
    }
    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);
        form.append("description", description);
        form.append("bigdescription", bigdescription);
        form.append("price", price);
        form.append("id_category", idcategory);
        form.append("image", image);
    
        api.post(`/api/product`, form, {
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
                                    placeholder="Name"
                                />
                                <Input
                                    type="text"
                                    onChange={(e) => setdescription(e)}
                                    value={description}
                                    placeholder="Description"
                                />
                                <Input
                                    type="text"
                                    onChange={(e) => setbigdescription(e)}
                                    value={bigdescription}
                                    placeholder="Big description"
                                />
                                <Input
                                    className="rounded-lg border-transparent flex-1 m-3 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    type="text"
                                    onChange={(e) => setprice(e)}
                                    value={price}
                                    placeholder="Price"
                                />
                                <select
                                    className="rounded-lg border-transparent m-3 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                                <input
                                    type="file"
                                    className="rounded-lg border-transparent m-3 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    onChange={(e) => changeHandler(e)}
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
