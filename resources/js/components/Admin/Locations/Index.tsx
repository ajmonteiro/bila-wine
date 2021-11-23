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

export function LocationPage() {
    const [visible, setvisible] = useState<"create" | "list">("list");
    return (
        <>
            <Div className="flex justify-center items-center mt-3">
                <Title
                    title={"LOCATIONS"}
                    className="font-bold text-4xl text-gray-700"
                />
            </Div>
            <Div className="flex justify-center items-center mt-3">
                <Button
                    onclick={() => setvisible("create")}
                    text="Create new"
                />
                <Button onclick={() => setvisible("list")} text="List" />
            </Div>
            {visible == "create" ? <Create visible={setvisible}/> : <List />}
        </>
    );
}

export function List() {
    const [locations, setlocations] = useState<any>();

    useEffect(() => {
        getLocations();
    }, []);

    function getLocations(page: number = 1) {
        api.get("/api/locations/paginate", {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setlocations(res.data.locations);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
                <Table>
                    <TableHead>
                        <TableHeader text="ID" />
                        <TableHeader text="Name" />
                    </TableHead>
                    <TableBody>
                        {locations &&
                            locations.data.map(
                                (item: {
                                    id: React.Key | null | undefined;
                                    name: any;
                                }) => (
                                    <TableRow key={item.id}>
                                        <TableData content={item.id} />
                                        <TableData content={item.name} />
                                    </TableRow>
                                )
                            )}
                    </TableBody>
                </Table>
        </>
    );
}

export function Create(props: any) {
    const [name, setname] = useState<any>();

    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);
        api.post(`/api/location`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                ToastSuccess("Succesfully added", "bottom-right");
                props.visible('list')
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
