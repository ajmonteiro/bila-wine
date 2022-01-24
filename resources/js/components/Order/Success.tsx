import React, { useState, useEffect } from "react";
import { Button, Div, Title } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";
import api from "../Data/Api";
import { useParams } from "react-router-dom";
import { getToken } from "../Data/Auth";

export default function SuccessPay() {
    const { id } = params();
    const [load, setLoad] = useState<any>(false);

    function params(): { id: any } {
        return useParams();
    }
    useEffect(() => {
        checkStateFromOrder();
    }, []);

    function checkStateFromOrder() {
        api.get(`/api/checkstate/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
            if(res.data.order == 0) {
                changeStateFromOrder();
            setLoad(true);
            } else {
                window.open(`/`, `_self`)
            }
        })
        .catch((err) => console.log(err.response))
    }

    function changeStateFromOrder() {
        const form = new FormData();
        form.append("id", id);

        api.post(`/api/order/state`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
        })
    }

    function goBackToHome() {
        window.open(`/`, `_self`);
    }
    return (
        <>
            <TopMenu />
            {load == true &&
            <Div className="flex items-center justify-center">
                <Div className="paid-with-success">
                    <Div className="flex flex-col justify-center items-center text-center">
                        <Title
                            title={"Pago com sucesso!"}
                            className="text-4xl"
                        />
                        <p className="mt-5 mb-5">
                            Enviamos-lhe um e-mail com a sua encomenda que foi
                            agora paga. Muito obrigado pela sua escolha!
                        </p>
                        <Button
                            text="Voltar para a página inicial"
                            onclick={() => goBackToHome()}
                        />
                    </Div>
                </Div>
            </Div>}
        </>
    );
}
