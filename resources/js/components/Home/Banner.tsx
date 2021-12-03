import React from "react";
import { Button, Div } from "../Layout/Layout";

export default function Banner() {
    return (
        <>
            <Div className="w-full z-0 px-6 mt-10">
                <Div className="relative rounded-lg bg-red-700 mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-24 md:pb-24 lg:pb-24 xl:pb-24">
                    <Div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
                            BILAWINE
                        </h1>
                        <p className="text-center text-white font-bold leading-tight">
                            O melhor dos vinhos
                        </p>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
