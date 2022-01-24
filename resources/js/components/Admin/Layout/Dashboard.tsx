import React, { useState, useEffect } from "react";
import api, { baseURL } from "../../Data/Api";
import { getToken } from "../../Data/Auth";
import Products from "../Products/Index";
import Header from "../../Layout/Header";
import { Div, Link, Title } from "../../Layout/Layout";
import Categories from "../Categories/Index";
import Adegas from "../Cellars/Index";
import Location from "../Locations/Index";
import Events from "../Events/Index";
import Newsletters from "../Newsletters/Index";
import Gifts from "../Gifts/Index";
import BannerHome from "../BannerHome/Index";

export default function Dashboard() {
    const [active, setActive] = useState<any>();
    const [next, setNext] = useState<any>();
    const [userEmail, setUserEmail] = useState<any>();
    const [userName, setUserName] = useState<any>();
    const [visible, setvisible] = useState<any>("dashboard");

    useEffect(() => {
        loadActive();
        getDashboardInfo();
    }, []);

    function getDashboardInfo() {
        api.get(`/api/dashboard`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setUserEmail(res.data.user.email);
            setUserName(res.data.user.name);
        });
    }

    async function loadActive() {
        setActive(
            document
                .getElementsByClassName(`first-item`)[0]
                .classList.add("active")
        );
    }

    async function changeActive(e: any) {
        setActive(
            document
                .getElementsByClassName(`active`)[0]
                .classList.remove("active")
        );
        setNext(
            document.getElementById(e.currentTarget.id)?.classList.add("active")
        );
    }

    return (
        <>
            <input type="checkbox" id="nav-toggle" />
            <Div className="sidebar">
                <Div className="sidebar-brand">
                    <h1 className="text-3xl">
                        <span>
                            {" "}
                            <img
                                src={baseURL() + "/static/assinatura.png"}
                                width={"30px"}
                            />
                        </span>
                        <span>BILAWINE</span>
                    </h1>
                </Div>
                <Div className="sidebar-menu">
                    <ul>
                        <li>
                            <Div
                                id="1"
                                className="list-item cursor-pointer first-item"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("dashboard");
                                }}
                            >
                                <span className="las la-igloo"></span>
                                <span>Dashboard</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                id="2"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("products");
                                }}
                            >
                                <span className="las la-dolly"></span>
                                <span>Produtos</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                id="3"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("categories");
                                }}
                            >
                                <span className="las la-archive"></span>
                                <span>Categorias</span>
                            </Div>
                        </li>
                        {/* <li>
                            <Div
                                id="4"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("adegas");
                                }}
                            >
                                <span className="las la-barcode"></span>
                                <span>Adegas</span>
                            </Div>
                        </li> */}
                        {/* <li>
                            <Div
                                id="5"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("locations");
                                }}
                            >
                                <span className="las la-map"></span>
                                <span>Localizações</span>
                            </Div>
                        </li> */}
                        <li>
                            <Div
                                id="6"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("events");
                                }}
                            >
                                <span className="las la-calendar"></span>
                                <span>Eventos</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                id="7"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("newsletter");
                                }}
                            >
                                <span className="las la-newspaper"></span>
                                <span>Newsletter</span>
                            </Div>
                        </li>
                        {/* <li>
                            <Div
                                id="8"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("gift");
                                }}
                            >
                                <span className="las la-gift"></span>
                                <span>Presentes</span>
                            </Div>
                        </li> */}
                        <li>
                            <Div
                                id="9"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => {
                                    changeActive(e), setvisible("banners");
                                }}
                            >
                                <span className="las la-images"></span>
                                <span>Banners</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                className="list-item cursor-pointer"
                                onclick={(e: any) => window.open(`/`, `_self`)}
                            >
                                <span className="las la-undo"></span>
                                <span className="font-bold">Voltar</span>
                            </Div>
                        </li>
                    </ul>
                </Div>
            </Div>
            <Div className="main-content">
                <header className="header-header">
                    <h2 className="text-3xl">
                        <label htmlFor="nav-toggle">
                            <span className="las la-bars cursor-pointer"></span>
                        </label>
                        {visible == "dashboard" && "Dashboard"}
                        {visible == "products" && "Produtos"}
                        {visible == "categories" && "Categorias"}
                        {visible == "adegas" && "Adegas"}
                        {visible == "locations" && "Localizações"}
                        {visible == "events" && "Eventos"}
                        {visible == "newsletter" && "Newsletter"}
                        {visible == "gift" && "Presentes"}
                        {visible == "banners" && "Banners Pag. Principal"}
                    </h2>
                    <Div className="search-wrapper">
                        <span className="las la-search"></span>
                        <input type="search" placeholder="Procura aqui" />
                    </Div>
                    <Div className="user-wrapper">
                        <img
                            src={baseURL() + "/storage/avatar.png"}
                            width="30px"
                            height="30px"
                            alt=""
                        />
                        <Div>
                            <h4>{userName}</h4>
                            <small>{userEmail}</small>
                        </Div>
                    </Div>
                </header>
                {visible == "dashboard" && <DefaultGrid />}
                {visible == "products" && <Products />}
                {visible == "categories" && <Categories />}
                {visible == "adegas" && <Adegas />}
                {visible == "locations" && <Location />}
                {visible == "events" && <Events />}
                {visible == "newsletter" && <Newsletters />}
                {visible == "gift" && <Gifts />}
                {visible == "banners" && <BannerHome />}
            </Div>
        </>
    );
}

export function DefaultGrid() {
    const [usersCount, setUsersCount] = useState<any>();
    const [productsCount, setProductsCount] = useState<any>();
    const [ordersCount, setOrdersCount] = useState<any>();
    const [income, setIncome] = useState<any>();
    const [userEmail, setUserEmail] = useState<any>();
    const [userName, setUserName] = useState<any>();
    const [products, setProducts] = useState<any>();
    const [users, setUsers] = useState<any>();

    useEffect(() => {
        getDashboardInfo();
        getProducts();
        getRecentUsers();
    }, []);

    function getDashboardInfo() {
        api.get(`/api/dashboard`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setUserEmail(res.data.user.email);
            setUserName(res.data.user.name);
            setUsersCount(res.data.users);
            setProductsCount(res.data.products);
            setOrdersCount(res.data.orders);
            setIncome(res.data.income.toFixed(0));
        });
    }

    function getProducts(page = 1) {
        api.get(`/api/products/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setProducts(res.data.products);
        });
    }

    function getRecentUsers() {
        api.get(`/api/recentusers`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setUsers(res.data.users);
        });
    }
    return (
        <>
            <main>
                <Div className="cards">
                    <Div className="card-single">
                        <Div>
                            <h1 className="text-3xl">{usersCount}</h1>
                            <span>Utilizadores</span>
                        </Div>
                        <Div>
                            <span className="las la-users"></span>
                        </Div>
                    </Div>
                    <Div className="card-single">
                        <Div>
                            <h1 className="text-3xl">{productsCount}</h1>
                            <span>Produtos</span>
                        </Div>
                        <Div>
                            <span className="las la-dolly"></span>
                        </Div>
                    </Div>
                    <Div className="card-single">
                        <Div>
                            <h1 className="text-3xl">{ordersCount}</h1>
                            <span>Orders</span>
                        </Div>
                        <Div>
                            <span className="las la-shopping-bag"></span>
                        </Div>
                    </Div>
                    <Div className="card-single">
                        <Div>
                            <h1 className="text-3xl">{income}€</h1>
                            <span>Income</span>
                        </Div>
                        <Div>
                            <span className="lab la-google-wallet"></span>
                        </Div>
                    </Div>
                </Div>
                <Div className="recent-grid mt-10">
                    <Div className="products">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">Produtos recentes</h2>
                                <button>Ver todos</button>
                            </Div>
                            <Div className="card-body">
                                <Div className="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>#</td>
                                                <td>Título</td>
                                                <td>Preço</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products?.data.map((item: any) => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.price + "€"}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="users">
                        <Div className="card">
                            <Div className="card-header">
                                <h2 className="text-2xl">Utilizador novos</h2>
                                <button>Ver todos</button>
                            </Div>
                            <Div className="card-body">
                                {users?.map((user: any) => (
                                    <Div className="customer" key={user.id}>
                                        <Div className="info">
                                            <img
                                                src={
                                                    baseURL() +
                                                    "/storage/avatar.png"
                                                }
                                                width="40px"
                                                height="40px"
                                            />
                                            <Div>
                                                <h4 className="text-xl">
                                                    {user.name}
                                                </h4>
                                                <small>{user.email}</small>
                                            </Div>
                                        </Div>
                                    </Div>
                                ))}
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </main>
        </>
    );
}
