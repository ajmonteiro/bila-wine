import React from "react";
import { Div, Title } from "../Layout/Layout";
import TopMenu from "../Layout/Menu";

export default function SuccessPay() {
    return (
        <>
            <TopMenu />
            <Div className="flex justify-center items-center h-3/5">
                <Title title={"Pago com sucesso"} className="text-4xl" />
            </Div>
        </>
    );
}
