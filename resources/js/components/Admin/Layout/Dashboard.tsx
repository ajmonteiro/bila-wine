import React, { useState, useEffect } from "react";
import api, { baseURL } from "../../Data/Api";
import { getToken } from "../../Data/Auth";
import Header from "../../Layout/Header";
import { Div, Link, Title } from "../../Layout/Layout";

export default function Dashboard() {
    const [usersCount, setUsersCount] = useState<any>();
    const [productsCount, setProductsCount] = useState<any>();
    const [ordersCount, setOrdersCount] = useState<any>();
    const [income, setIncome] = useState<any>();
    const [userEmail, setUserEmail] = useState<any>();
    const [userName, setUserName] = useState<any>();
    const [products, setProducts] = useState<any>();
    const [active, setActive] = useState<any>();
    const [next, setNext] = useState<any>();

    useEffect(() => {
        getDashboardInfo();
        getProducts();
        loadActive();
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
            setIncome(res.data.income);
        });
    }

    function getProducts(page = 1) {
        api.get(`/api/products/paginate?page=${page}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setProducts(res.data.products);
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
                        <span className="lab la-accusoft"></span>
                        <span>BILAWINE</span>
                    </h1>
                </Div>
                <Div className="sidebar-menu">
                    <ul>
                        <li>
                            <Div
                                id="1"
                                className="list-item cursor-pointer first-item"
                                onclick={(e: any) => changeActive(e)}
                            >
                                <span className="las la-igloo"></span>
                                <span>Dashboard</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                id="2"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => changeActive(e)}
                            >
                                <span className="las la-dolly"></span>
                                <span>Produtos</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                id="3"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => changeActive(e)}
                            >
                                <span className="las la-archive"></span>
                                <span>Categorias</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                id="4"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => changeActive(e)}
                            >
                                <span className="las la-barcode"></span>
                                <span>Adegas</span>
                            </Div>
                        </li>
                        <li>
                            <Div
                                id="5"
                                className="list-item cursor-pointer"
                                onclick={(e: any) => changeActive(e)}
                            >
                                <span className="las la-map"></span>
                                <span>Localizações</span>
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
                        Dashboard
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

                    <Div className="recent-grid">
                        <Div className="products">
                            <Div className="card">
                                <Div className="card-header">
                                    <h2 className="text-2xl">
                                        Produtos recentes
                                    </h2>
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
                        <Div className="users">
                            <Div className="card">
                                <Div className="card-header">
                                    <h2 className="text-2xl">
                                        Utilizador novos
                                    </h2>
                                    <button>Ver todos</button>
                                </Div>
                                <Div className="card-body">
                                    <Div className="customer">
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
                                                    Lewis S. Cunningham
                                                </h4>
                                                <small>CEO Expert</small>
                                            </Div>
                                        </Div>
                                        <Div className="contact">
                                            <span className="las la-user-circle"></span>
                                            <span className="las la-comment"></span>
                                            <span className="las la-phone"></span>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </main>
            </Div>
        </>
    );
}
