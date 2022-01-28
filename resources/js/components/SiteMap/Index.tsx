import React, { useState, useEffect } from "react";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import Newsletter from "../Home/Newsletter";
import Footer from "../Layout/Footer";
import { Div } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";

export default function SiteMap() {
    const [isAdmin, setIsAdmin] = useState<any>(1);
    const [load, setLoad] = useState<any>();

    useEffect(() => {
        api.get(`/api/isadmin`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                setIsAdmin(res.data.admin);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoad(true);
            });
    }, []);
    return (
        <>
            <TopMenu />
            {load && (
                <>
                    <Div className="mapa-do-site mt-10">
                        <Div className="mapa-div">
                            <Div className="mapa-grid">
                                <Div>
                                    <h1>A SUA CONTA</h1>
                                    <ul>
                                        <li onClick={() => window.open(`/utilizador`)}>ÁREA CLIENTE</li>
                                        <li>TERMINAR SESSÃO</li>
                                    </ul>
                                </Div>
                                <Div>
                                    <h1>PÁGINAS</h1>
                                    <ul>
                                        {isAdmin == 1 && (
                                            <li onClick={() => window.open(`/admin`)}>DASHBOARD ADMINISTRADOR</li>
                                        )}
                                        <li onClick={() => window.open(`/utilizador`)}>PRODUTOS</li>
                                        <li onClick={() => window.open(`/eventos`)}>EVENTOS</li>
                                        <li onClick={() => window.open(`/carrinho`)}>CARRINHO</li>
                                        <li onClick={() => window.open(`/sobre-bilawine`)}>SOBRE</li>
                                        <li onClick={() => window.open(`/contactos`)}>CONTACTOS</li>
                                    </ul>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Footer />
                </>
            )}
            )
        </>
    );
}
