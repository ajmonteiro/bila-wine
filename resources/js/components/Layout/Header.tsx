import React from "react";
import { baseURL } from "../Data/Api";
import Phrase from "../Home/LookingFor";
import { Button, Div, Image, Link, Paragraph } from "./Layout";

export default function Header() {
    return (
        <>
            <Div className="relative bg-white overflow-hidden">
                <Div className="max-w-7xl mx-auto">
                    <Div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <Div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <Paragraph
                                        className="block xl:inline"
                                        text="AS PROVAS DE VINHO"
                                    />
                                    <Paragraph
                                        className="block text-red-900 xl:inline"
                                        text=" EM PORTUGAL"
                                    />
                                </h1>
                                <Paragraph
                                    className="mt-3 text-base text-red-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                    text="O VINHO REFLETE A NATUREZA DA TERRA QUE O VIU CRESCER E É A EXPRESSÃO DE QUEM O PRODUZ"
                                />
                                <Div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <Div className="rounded-md shadow">
                                        <Link
                                            path="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            PROVAS VINICOLAS
                                        </Link>
                                    </Div>
                                    <Div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            path="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            CONTACTE-NOS
                                        </Link>
                                    </Div>
                                </Div>
                            </Div>
                        </main>
                    </Div>
                </Div>
                <Div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <Image
                        path={baseURL() + "/storage/background.jpg"}
                        className="lg:h-screen"
                    />
                </Div>
            </Div>
            <Div className="flex justify-center mt-10">
                <Link
                    path="#"
                    className="flex items-center mt-10 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                    KNOW MORE
                </Link>
            </Div>
        </>
    );
}
