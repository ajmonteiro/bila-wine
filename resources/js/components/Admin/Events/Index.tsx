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
import { DeleteIcon, EditIcon } from "../../Layout/Icons";

export default function Admin() {
    return (
        <>
            <DashboardLayout />
        </>
    );
}

export function EventPage() {
    const [visible, setvisible] = useState<"create" | "list">("list");
    return (
        <>
            <Div className="flex justify-start items-center mt-3">
                <Title
                    title={"EVENTS"}
                    className="font-bold text-4xl text-gray-700"
                />
            </Div>
            <Div className="flex justify-start items-center">
                <Button
                    onclick={() => setvisible("create")}
                    text="Create new"
                />
                <Button
                    onclick={() => setvisible("list")}
                    text="List"
                />
            </Div>
            {visible == "create" ? <Create visible={setvisible}/> : <List />}
        </>
    );
}

export function List() {
    const [events, setevents] = useState<any>();

    useEffect(() => {
        getEvents();
    }, []);

    function getEvents(page: number = 1) {
        api.get("/api/events/paginate", {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setevents(res.data.events);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteEvent() {
        console.log("delete");
    }
    return (
        <>
            <Div className="flex justify-start text-center">
                <Table>
                    <TableHead className="bg-red-200">
                        <TableHeader text="ID" />
                        <TableHeader text="Name" />
                        <TableHeader text="Description" />
                        <TableHeader text="Price" />
                        <TableHeader text="Duration" />
                        <TableHeader text="Person Number" />
                        <TableHeader text="Image" />
                        <TableHeader text="Actions" colspan={2} />
                    </TableHead>
                    <TableBody>
                        {events &&
                            events.data.map(
                                (item: {
                                    id: React.Key;
                                    title: string;
                                    description: string;
                                    image: string;
                                    price: string;
                                    duration: string;
                                    person_number: string;
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
                                            content={item.duration + "hours"}
                                        />
                                        <TableData
                                            content={item.person_number}
                                        />
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
                                        <TableData content={<EditIcon />} className="flex justify-center"/>
                                        <TableData
                                            content={<DeleteIcon />}
                                            onclick={() => deleteEvent()}
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
    const [image, setimage] = useState<any>();
    const [price, setprice] = useState<any>();
    const [duration, setduration] = useState<any>();
    const [personnumber, setpersonnumber] = useState<any>();

    function changeHandler(e: any) {
        setimage(e.target.files[0]);
    }
    function create(e: any) {
        e.preventDefault();
        const form = new FormData();
        form.append("title", title);
        form.append("description", description);
        form.append("image", image);
        form.append("price", price);
        form.append("duration", duration);
        form.append("person_number", personnumber);

        api.post(`/api/event`, form, {
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
                                <Input
                                    type="number"
                                    onChange={(e) => setduration(e)}
                                    value={duration}
                                    placeholder="Duration (in hours)"
                                />
                                <Input
                                    type="number"
                                    onChange={(e) => setpersonnumber(e)}
                                    value={personnumber}
                                    placeholder="Person Number"
                                    max={10}
                                    min={1}
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
