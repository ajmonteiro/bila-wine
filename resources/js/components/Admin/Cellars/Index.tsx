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

export function CellarPage() {
    const [visible, setvisible] = useState<"create" | "list">("list");
    return (
        <>
            <Div className="flex justify-start items-center mt-3">
                <Title
                    title={"CELLARS"}
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
    const [cellars, setcellars] = useState<any>();

    useEffect(() => {
        getCellars();
    }, []);

    function getCellars(page: number = 1) {
        api.get("/api/cellars", {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setcellars(res.data.cellars);
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
                        <TableHeader text="Description" />
                        <TableHeader text="Price" />
                        <TableHeader text="Image" />
                    </TableHead>
                    <TableBody>
                        {cellars &&
                            cellars.data.map(
                                (item: {
                                    id: React.Key;
                                    title: string;
                                    description: string;
                                    image: string;
                                    price: string;
                                }) => (
                                    <TableRow key={item.id}>
                                        <TableData content={item.id} />
                                        <TableData content={item.title} />
                                        <TableData
                                            content={
                                                item.description
                                                    ? item.description
                                                    : "---"
                                            }
                                        />
                                        <TableData content={item.price + "€"} />
                                        <TableData
                                            content={
                                                <Image
                                                    path={
                                                        baseURL() + item.image
                                                    }
                                                    width={"100px"}
                                                    height={"auto"}
                                                />
                                            }
                                        />
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
    const [title, settitle] = useState<any>();
    const [description, setdescription] = useState<any>();
    const [locations, setlocations] = useState<any>();
    const [selectedLocation, setSelectedLocation] = useState<any>();
    const [image, setimage] = useState<any>();
    const [price, setprice] = useState<any>();

    useEffect(() => {
        getLocations();
    }, []);

    function getLocations() {
        api.get("/api/locations", {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setlocations(res.data.locations);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    function changeHandler(e: any) {
        setimage(e.target.files[0]);
    }
    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("title", title);
        form.append("description", description);
        form.append("location_id", selectedLocation);
        form.append("image", image);
        form.append("price", price);

        api.post(`/api/cellar`, form, {
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
                                    onChange={(e) => settitle(e)}
                                    value={title}
                                    placeholder="Title"
                                />
                                <Input
                                    type="text"
                                    onChange={(e) => setdescription(e)}
                                    value={description}
                                    placeholder="Description"
                                />
                                <input
                                    type="file"
                                    className="rounded-lg border-transparent m-3 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    onChange={(e) => changeHandler(e)}
                                />
                                <Input
                                    type="text"
                                    onChange={(e) => setprice(e)}
                                    value={price}
                                    placeholder="Price"
                                />
                                <select
                                    className="rounded-lg border-transparent m-3 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    onChange={(e) =>
                                        setSelectedLocation(e.target.value)
                                    }
                                >
                                    <option>Select Location</option>
                                    {locations &&
                                        locations.map(
                                            (item: {
                                                id: string | number | undefined;
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
