import React, { useState, useEffect } from "react";
import { Div } from "../Layout/Layout";

export default function UserData() {
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">Dados pessoais</h3>
                </Div>
                <Div className="userdata-div">
                    <Div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Américo" />
                    </Div>
                    <Div>
                        <label htmlFor="surname">Apelido</label>
                        <input type="text" placeholder="Américo" />
                    </Div>
                    <Div>
                        <label htmlFor="name">Data de nascimento</label>
                        <input type="text" placeholder="DD/MM/AA" />
                    </Div>
                    <Div>
                        <label htmlFor="name">Email</label>
                        <input
                            type="text"
                            placeholder="americo.mnt@gmail.com"
                        />
                    </Div>
                    <Div>
                        <button className="user-details-button">
                            Guardar alterações
                        </button>
                    </Div>
                </Div>
            </Div>
        </>
    );
}

export function UpdatePwd() {
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">Alterar palavra-passe</h3>
                </Div>
                <Div className="userdata-div">
                    <Div>
                        <label htmlFor="name">Palavra-passe atual</label>
                        <input type="password" />
                    </Div>
                    <Div>
                    </Div>
                    <Div>
                        <label htmlFor="surname">Nova palavra-passe</label>
                        <input type="password"  />
                    </Div>
                    <Div>
                        <label htmlFor="name">Repetir palavra-passe</label>
                        <input type="password" />
                    </Div>
                    <Div>
                        <button className="user-details-button">
                            Guardar nova palavra-passe
                        </button>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
