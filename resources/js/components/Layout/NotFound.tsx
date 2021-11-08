import React from "react";
import { Button, Div, Title } from "./Layout";

export default function NotFound() {

    function changePage() {
        window.open(`/`, `_self`)
    }
    return (
        <>
            <Div className="relative min-h-screen flex items-center justify-center bg-red-900 overflow-hidden">
                <Div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150">
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-5 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-1 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-4 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-5 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-3 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-4 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-7 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-1 bg-red-800 rounded animate-pulse"></Div>

                    <Div className="col-span-4 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-5 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-1 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-4 bg-red-800 rounded animate-pulse"></Div>

                    <Div className="col-span-4 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-7 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-1 bg-red-800 rounded animate-pulse"></Div>

                    <Div className="col-span-5 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-1 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-3 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-3 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-2 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-5 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-1 bg-red-800 rounded animate-pulse"></Div>
                    <Div className="col-span-4 bg-red-800 rounded animate-pulse"></Div>
                </Div>

                <Div className="relative">
                    <Title
                        title="404"
                        className="text-white text-4xl md:text-8xl font-bold flex flex-row items-center"
                    />
                    <Div className="flex justify-center">
                        <Button text={"Voltar"} onclick={() => changePage()} />
                    </Div>
                </Div>
            </Div>
        </>
    );
}
