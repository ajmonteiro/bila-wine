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
    const [events, setEvents] = useState<any>();
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
            setProducts(res.data.products);
            setEvents(res.data.events);
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
            <Div className="cart-page">
                <Div className="cart-container">
                    <span className="text-xl font-bold">O meu carrinho</span>
                    <Div className="cart-grid">
                        {products?.map((item: any) => (
                            <>
                                <Div className="cart-grid-div">
                                    <Div key={item.id}>
                                        <Div>
                                            <img src={baseURL() + item.image} />
                                        </Div>
                                        <Div className="content">
                                            <span>{item.name}</span>
                                            <p>{item.description}</p>
                                        </Div>
                                    </Div>
                                    <Div
                                        onclick={(e) =>
                                            handleDelete(e, item.id)
                                        }
                                    >
                                        <i
                                            className="las la-trash"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        ></i>
                                    </Div>
                                    <Div className="price">
                                        <span>€{item.price}</span>
                                    </Div>
                                </Div>
                            </>
                        ))}
                        {events?.map((item: any) => (
                            <>
                                <Div className="cart-grid-div">
                                    <Div key={item.id}>
                                        <Div>
                                            <img src={baseURL() + item.image} />
                                        </Div>
                                        <Div className="content">
                                            <span>{item.title}</span>
                                            <p>{item.description}</p>
                                        </Div>
                                    </Div>
                                    <Div
                                        onclick={(e) =>
                                            handleDelete(e, item.id)
                                        }
                                    >
                                        <i
                                            className="las la-trash"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        ></i>
                                    </Div>
                                    <Div className="price">
                                        <span>€{item.price}</span>
                                    </Div>
                                </Div>
                            </>
                        ))}
                    </Div>
                    <Div className="flex justify-end mt-2">
                        <Button
                            text={"AVANÇAR"}
                            onclick={() => props.visible("billing")}
                        />
                    </Div>
                </Div>
            </Div>
        </>
    );
}

export function Billing(props: any) {
    const [products, setProducts] = useState<any>();
    const [events, setEvents] = useState<any>();
    const [totalItems, setTotalItems] = useState<any>();
    const [total, settotal] = useState<any>();
    const [showProductInfo, setShowProductInfo] = useState<any>(false);

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
            setProducts(res.data.products);
            setEvents(res.data.events)
            setTotalItems(res.data.cart.length);
            settotal(res.data.total.toFixed(2));
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
        const form = new FormData();
        form.append("first_name", firstName);
        form.append("last_name", lastName);
        form.append("email", email);
        form.append("address", address);
        form.append("postal_code", postalCode);
        form.append("city", city);
        form.append("notes", notes);
        form.append("saved", saved);
        form.append("total_price", total);

        api.post(`/api/order`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res)
            api.delete(`/api/cart`, {
                headers: { Authorization: `Bearer ${getToken()}` },
            }).then((res) => {});
            window.open(`/order/${res.data.order}`);
        });
    }

    async function chooseActive(id: any) {
        let active = document.getElementById(id);
        if (active?.style.display) {
            if (active?.style.display == "none") {
                active.style.display = "flex";
            } else {
                active.style.display = "none";
            }
        }
    }
    return (
        <>
            <Div className="cart-wrapper-info">
                <Div className="cart-container-info">
                    <Div className="cart-grid-info">
                        <Div className="left-side-grid-cart">
                            <Div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Primeiro Nome"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Último Nome"
                                    value={lastName}
                                    onChange={(e) =>
                                        setlastName(e.target.value)
                                    }
                                />
                            </Div>
                            <Div className="input-group">
                                <input
                                    type="text"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Div>
                            <Div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Endereço"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Div>
                            <Div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Cidade"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Código-postal"
                                    value={postalCode}
                                    onChange={(e) =>
                                        setPostalCode(e.target.value)
                                    }
                                />
                            </Div>
                            <Div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Notas (opcional)"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </Div>
                            <Div className="flex justify-end mr-3 mb-3">
                                <Button text="CONTINUAR" onclick={() => handleOrder()} />
                            </Div>
                        </Div>
                        <Div className="right-side-grid-cart mt-4">
                            <h2 className="text-xl font-bold mb-4 products-list-text">
                                Produtos
                            </h2>
                            <Div className="cart-products-show-list">
                                {products?.map((item: any) => (
                                    <>
                                        <div
                                            className="product-show-list"
                                            onClick={() => {
                                                chooseActive(item.id);
                                            }}
                                        >
                                            {item.name}
                                            <i className="las la-angle-right"></i>
                                        </div>
                                        <div
                                            className="product-info-list-cart"
                                            id={`${item.id}`}
                                            style={{
                                                display: "none",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <span
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                {item.description}
                                            </span>
                                            <span
                                                style={{ fontSize: "0.8rem" }}
                                                className="font-bold"
                                            >
                                                €{item.price}
                                            </span>
                                            <DeleteIcon onclick={(e) => handleDelete(e, item.id)}/>
                                        </div>
                                    </>
                                ))}
                                 {events?.map((item: any) => (
                                    <>
                                        <div
                                            className="product-show-list"
                                            onClick={() => {
                                                chooseActive(item.id+'event');
                                            }}
                                        >
                                            {item.title}
                                            <i className="las la-angle-right"></i>
                                        </div>
                                        <div
                                            className="product-info-list-cart"
                                            id={`${item.id}event`}
                                            style={{
                                                display: "none",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <span
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                {item.description}
                                            </span>
                                            <span
                                                style={{ fontSize: "0.8rem" }}
                                                className="font-bold"
                                            >
                                                €{item.price}
                                            </span>
                                            <DeleteIcon onclick={(e) => handleDelete(e, item.id)}/>
                                        </div>
                                    </>
                                ))}
                            </Div>
                            <Div className="m-3 flex justify-end">
                                <span>
                                    Total:{" "}
                                    <span className="font-bold">€{total}</span>
                                </span>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
