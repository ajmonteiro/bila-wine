import React from "react";
import { baseURL } from "../../Data/Api";
import Header from "../../Layout/Header";
import { Div, Link, Title } from "../../Layout/Layout";

export default function Dashboard() {
    return (
        <>
            <input type="checkbox" id="nav-toggle" />
            <Div className="sidebar">
                <Div className="sidebar-brand">
                    <h1 className="text-3xl"><span className="lab la-accusoft"></span><span>BILAWINE</span></h1>
                </Div>
                <Div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link path={"#"} className="active">
                                <span className="las la-igloo"></span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link path={"#"}>
                                <span className="las la-dolly"></span>
                                <span>Produtos</span>
                            </Link>
                        </li>
                        <li>
                            <Link path={"#"}>
                                <span className="las la-archive"></span>
                                <span>Categorias</span>
                            </Link>
                        </li>
                        <li>
                            <Link path={"#"}>
                                <span className="las la-barcode"></span>
                                <span>Adegas</span>
                            </Link>
                        </li>
                        <li>
                            <Link path={"#"}>
                                <span className="las la-map"></span>
                                <span>Localizações</span>
                            </Link>
                        </li>
                    </ul>
                </Div>
            </Div>
            <Div className="main-content">
                <header className="header-header">
                    <h2 className="text-3xl">
                        <label htmlFor="nav-toggle">
                            <span className="las la-bars"></span>
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
                            <h4>John Doe</h4>
                            <small>Super admin</small>
                        </Div>
                    </Div>
                </header>
                <main>
                    <Div className="cards">
                        <Div className="card-single">
                            <Div>
                                <h1 className="text-3xl">54</h1>
                                <span>Utilizadores</span>
                            </Div>
                            <Div>
                                <span className="las la-users"></span>
                            </Div>
                        </Div>
                        <Div className="card-single">
                            <Div>
                                <h1 className="text-3xl">54</h1>
                                <span>Produtos</span>
                            </Div>
                            <Div>
                                <span className="las la-dolly"></span>
                            </Div>
                        </Div>
                        <Div className="card-single">
                            <Div>
                                <h1 className="text-3xl">54</h1>
                                <span>Orders</span>
                            </Div>
                            <Div>
                                <span className="las la-shopping-bag"></span>
                            </Div>
                        </Div>
                        <Div className="card-single">
                            <Div>
                                <h1 className="text-3xl">6€</h1>
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
                                                    <td>Status</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Titulo 1</td>
                                                    <td>
                                                        <span className="status"></span>
                                                        Em stock
                                                    </td>
                                                </tr>
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
