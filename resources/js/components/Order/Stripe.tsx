import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "../Layout/Layout";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { useParams } from "react-router";

interface StripeProps {
    price: any;
}

export default function Stripe(props: StripeProps) {
    const { id } = params();

    function params(): { id: any } {
        return useParams();
    }
    async function payStripe(e: any) {
        e.preventDefault();
        const stripePromise = await loadStripe(`pk_test_51JzpIVGcdbf6fNPGqE5OiArWf9yVh2B0dxhg4HiL4U79O0gLzFjBdetMFjtGXy3FawrlAvuGuvW9J9YehLaYI0l300yVhstZrs`);
        const form = new FormData();

        form.append(`id_secret`, id);
        form.append(`price`, props.price);
        form.append(`name`, `Produtos`);

        api.post(`/api/stripe`, form, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((res) => {
                return res.data;
            })
            .then((session) => {
                stripePromise?.redirectToCheckout({
                    sessionId: session.id,
                }).then(() => {
                    api.put(`/api/order/state/${id}`, { headers: { Authorization: `Bearer ${getToken()}`}
                }).then((res) => {
                    console.log(res)
                })
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Button text={"Pagar"} onclick={(e: any) => payStripe(e)} />
        </>
    );
}
