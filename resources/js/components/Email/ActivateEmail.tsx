import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div } from "../Layout/Layout";
import Navbar from "../Layout/Navbar/Navbar";

export default function ActivateEmail() {
    const { id } = params();

    function params(): { id: any } {
        return useParams();
    }
    useEffect(() => {
        api.get(`/api/email/user/${id}`).then((res) => {});
    }, []);

    return (
        <>
            <div
                className="flex items-center flex-col"
                style={{
                    marginTop: "20vh",
                }}
            >
                <h1
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                    }}
                >
                    Email verificado com sucesso
                </h1>
                <Button text="Efetuar login" onclick={() => window.open(`/auth`, `_self`)} />
            </div>
        </>
    );
}
