import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { NoResultsFound } from "../Data/Utils/NoResultsFound";
import { DeleteIcon, MinusIcon, PlusIcon } from "../Layout/Icons";
import {
    Div,
    Title,
    Image,
    Paragraph,
    Button,
    Link,
    Input,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableHeader,
    TableData,
    TableFooter,
} from "../Layout/Layout";
import TopMenu from "../Layout/Menu";

export default function Cart() {
    const [visible, setvisible] = useState<"cart" | "billing">("cart");

    return (
        <>
            <TopMenu />
            {visible == "cart" ? (
                <CartPage visible={setvisible} />
            ) : (
                <Billing visible={setvisible} />
            )}
        </>
    );
}

export function CartPage(props: any) {
    const [totalItems, setTotalItems] = useState<any>();
    const [products, setProducts] = useState<any>();
    const [total, settotal] = useState<number>();

    useEffect(() => {
        getCartFromUser();
    }, []);

    /**
     * @returns @array_products
     */
    function getCartFromUser() {
        api.get(`/api/cart`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
            setProducts(res.data.cart);
            setTotalItems(res.data.cart.length);
            settotal(res.data.total);
        });
    }

    function handleDelete(e: any, id: number) {
        api.delete(`/api/cart/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            getCartFromUser();
        });
    }

    return (
        <>
            {totalItems != 0 ? (
                <Div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader text={"#"} />
                                <TableHeader text={"PRODUTO"} />
                                <TableHeader text={"REMOVER"} />
                                <TableHeader text={"PREÇO"} />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products?.map(
                                (item: {
                                    id: any;
                                    name: any;
                                    price: any;
                                    image: any;
                                }) => (
                                    <TableRow key={item.id}>
                                        <TableData
                                            content={
                                                <Image
                                                    path={
                                                        baseURL() + item.image
                                                    }
                                                    width={"100"}
                                                />
                                            }
                                        />
                                        <TableData content={item.name} />
                                        <TableData
                                            content={
                                                <DeleteIcon
                                                    className="cursor-pointer"
                                                    onclick={(e: any) =>
                                                        handleDelete(e, item.id)
                                                    }
                                                />
                                            }
                                        />
                                        <TableData content={item.price + "€"} />
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableData
                                    content={
                                        <Title
                                            className="text-xl"
                                            title={`Preço total: ${total}€`}
                                        />
                                    }
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                    <Div className="flex justify-center">
                        <Button
                            text={"Avançar"}
                            onclick={(e: any) => props.visible("billing")}
                        />
                    </Div>
                </Div>
            ) : <NoResultsFound title={"Sem resultados"} text={"Não foram encontrados resultados"} />}
        </>
    );
}

export function Billing(props: any) {
    const [products, setProducts] = useState<any>();
    const [totalItems, setTotalItems] = useState<any>();
    const [total, settotal] = useState<any>();


    // billing address info
    const [firstName, setFirstName] = useState<any>();
    const [lastName, setlastName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [address, setAddress] = useState<any>();
    const [postalCode, setPostalCode] = useState<any>();
    const [city, setCity] = useState<any>();
    const [notes, setNotes] = useState<any>();
    const [saved, isSaved] = useState<any>();

    useEffect(() => {
        getCartFromUser();
    }, []);

    /**
     * @returns @array_products
     */
    function getCartFromUser() {
        api.get(`/api/cart`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
            setProducts(res.data.cart);
            setTotalItems(res.data.cart.length);
            settotal(res.data.total);
        });
    }

    function handleDelete(e: any, id: number) {
        api.delete(`/api/cart/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            getCartFromUser();
        });
    }

    function handleOrder() {
        const form = new FormData
        form.append('first_name', firstName)
        form.append('last_name', lastName)
        form.append('email', email)
        form.append('address', address)
        form.append('postal_code', postalCode)
        form.append('city', city)
        form.append('notes', notes)
        form.append('saved', saved)
        form.append('total_price', total)

        api.post(`/api/order`, form, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            api.delete(`/api/cart`, { headers: { Authorization: `Bearer ${getToken()}`}
            }).then((res) => {
            })
            window.open(`/order/${res.data.order}`)
        })
    }

    return (
        <>
            <Div className="container p-12 mx-auto">
                <Div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <Div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">
                            Endereço de envio
                        </h2>
                        <Div className="">
                            <Div className="space-x-0 lg:flex lg:space-x-4">
                                <Div className="w-full lg:w-1/2">
                                    <label
                                        htmlFor="firstName"
                                        className="block mb-3 text-sm font-semibold text-gray-500"
                                    >
                                        Primeiro Nome
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder={"Primeiro Nome"}
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value={firstName} onChange={(e)=> setFirstName(e)} />
                                </Div>
                                <Div className="w-full lg:w-1/2 ">
                                    <label
                                        htmlFor="firstName"
                                        className="block mb-3 text-sm font-semibold text-gray-500"
                                    >
                                        Último Nome
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder={"Último Nome"}
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value={lastName} onChange={(e)=> setlastName(e)} />
                                </Div>
                            </Div>
                            <Div className="mt-4">
                                <Div className="w-full">
                                    <label
                                        htmlFor="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500"
                                    >
                                        E-mail
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder={"E-mail"}
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value={email} onChange={(e)=> setEmail(e)} />
                                </Div>
                            </Div>
                            <Div className="mt-4">
                                <Div className="w-full">
                                    <label
                                        htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500"
                                    >
                                        Endereço
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address"
                                        placeholder="Address"
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></textarea>
                                </Div>
                            </Div>
                            <Div className="space-x-0 lg:flex lg:space-x-4">
                                <Div className="w-full lg:w-1/2">
                                    <label
                                        htmlFor="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500"
                                    >
                                        Cidade
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder={"Cidade"}
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value={city} onChange={(e)=> setCity(e)} />
                                </Div>
                                <Div className="w-full lg:w-1/2 ">
                                    <label
                                        htmlFor="postcode"
                                        className="block mb-3 text-sm font-semibold text-gray-500"
                                    >
                                        Código postal
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder={"Código postal"}
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value={postalCode} onChange={(e)=> setPostalCode(e)} />
                                </Div>
                            </Div>
                            <Div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                                        value={saved}
                                        onChange={(e) => isSaved(e.target.value)}
                                    />
                                    <span className="ml-2">
                                        Guardar a informação
                                    </span>
                                </label>
                            </Div>
                            <Div className="relative pt-3 xl:pt-6">
                                <label
                                    htmlFor="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"
                                >
                                    {" "}
                                    Notas (Opcional)
                                </label>
                                <textarea
                                    name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Notas"
                                    onChange={(e) => setNotes(e.target.value)}
                                ></textarea>
                            </Div>
                            <Div className="mt-4">
                                <Button text={"Processar"} onclick={() => handleOrder()} className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" />
                            </Div>
                        </Div>
                    </Div>
                    <Div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <Div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Sumário</h2>
                            <Div className="mt-8">
                                <Div className="flex flex-col space-y-4">
                                    {products?.map((item: any) => (
                                        <Div className="flex space-x-4">
                                            <Div>
                                                <img
                                                    src={baseURL() + item.image}
                                                    className="w-60"
                                                />
                                            </Div>

                                            <Div>
                                                <h2 className="text-xl font-bold">
                                                    {item.name}
                                                </h2>
                                                <span className="text-red-600">
                                                    Preço
                                                </span>{" "}
                                                {item.price + "€"}
                                            </Div>
                                            <Div
                                                className="cursor-pointer"
                                                onclick={(e: any) =>
                                                    handleDelete(e, item.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </Div>
                                        </Div>
                                    ))}
                                </Div>
                            </Div>
                        </Div>
                        <Div className="flex p-4 mt-4">
                            <h2 className="text-xl font-bold">ITEMS {totalItems}</h2>
                        </Div>
                        <Div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-2">{total}</span>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
