import React, { useState, useEffect } from "react";
import { baseURL } from "../../Data/Api";
import { CartIcon, DeleteIcon, UserIcon } from "../Icons";
import { Div, Title } from "../Layout";

export default function Navbar() {
    return (
        <>
            <Menu />
        </>
    );
}

export function Menu() {
    function goCart() {
        window.open(`/carrinho`, `_self`);
    }
    function goPage() {
        window.open(`/`, `_self`);
    }
    const [visible, setVisible] = useState<any>(false);
    const [searchInputsVisible, setSearchInputsVisible] = useState<any>(false);
    const [searchInput, setSearchInput] = useState<any>("");
    const [userDropdown, setUserDropDown] = useState<any>(false);
    function handleSearchView(value: any) {
        setSearchInput(value);
        setTimeout(() => {
            setSearchInputsVisible(true);
        }, 1000);
    }

    function sendToClientArea() {
        window.open(`/utilizador`, `_self`);
    }
    return (
        <>
            <Div className="top-nav">
                <Div className="top-nav-grid">
                    <Div
                        className="bila-wine-top cursor-pointer"
                        onclick={() => goPage()}
                    >
                        <span>BILAWINE</span>
                    </Div>
                    <Div className="search-input cursor-pointer">
                        <input
                            type="text"
                            className="input-search"
                            value={searchInput}
                            onChange={(e) => {
                                handleSearchView(e.target.value);
                            }}
                            placeholder="O que estás à procura?"
                        />
                    </Div>
                    <Div className="carrinho cursor-pointer">
                        <CartIcon onclick={() => goCart()} />
                    </Div>
                </Div>
            </Div>
            {searchInputsVisible && searchInput != "" && (
                <Div className="search-results">
                    <Div className="list-search">
                        <ul>
                            <li>
                                <span>Search result 1</span>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>
                                <span>Search result 1</span>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>
                                <span>Search result 1</span>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>
                                <span>Search result 1</span>
                                <i className="las la-angle-right"></i>
                            </li>
                        </ul>
                    </Div>
                </Div>
            )}
            <Div className="bottom-nav">
                <Div className="bottom-nav-container">
                    <ul className="bottom-nav-grid">
                        <Div>
                            <li>PRODUTOS</li>
                        </Div>
                        <Div>
                            <li>EVENTOS</li>
                        </Div>
                        <Div>
                            <li>PRESENTES</li>
                        </Div>
                        <Div>
                            <li>EMPRESAS</li>
                        </Div>
                        <Div className="noborder">
                            <li>CONTACTOS</li>
                        </Div>
                        <Div className="spacer user-bottom-nav-low">
                            <Div
                                className="flex flex-row noborder dropdown-m"
                                onclick={(e) => setUserDropDown(!userDropdown)}
                            >
                                <li>OLA AMÉRICO</li>
                                <i className="las la-angle-down"></i>
                            </Div>
                            {userDropdown && (
                                <nav className="noborder dropdown-content">
                                    <li onClick={() => sendToClientArea()}>
                                        ÁREA CLIENTE
                                    </li>
                                    <li>TERMINAR SESSÃO</li>
                                </nav>
                            )}
                        </Div>
                        <Div className="user-bottom-nav">
                            <Div className="flex flex-row noborder dropdown-m"
                            onclick={(e) => setUserDropDown(!userDropdown)}>
                                <li>OLA AMÉRICO</li>
                                <i className="las la-angle-down"></i>
                            </Div>
                            {userDropdown && (
                                <nav className="noborder dropdown-content">
                                    <li onClick={() => sendToClientArea()}>
                                        ÁREA CLIENTE
                                    </li>
                                    <li>TERMINAR SESSÃO</li>
                                </nav>
                            )}
                        </Div>
                    </ul>
                </Div>
            </Div>
        </>
    );
}
