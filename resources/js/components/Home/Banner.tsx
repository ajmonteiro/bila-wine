import React from "react";
import { Button, Div } from "../Layout/Layout";

export default function Banner() {
    return (
        <>
            <Div className="w-full relative">
                <Div className="w-full h-full top-0 left-0 absolute bg-gradient-to-br from-yellow-400 via-red-500 opacity-70"></Div>
                <Div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center z-30">
                    <Div className="text-6xl font-bold text-white xs:text-xl">
                        MEGA BLACK WEEK
                    </Div>
                    <Div className="text-2xl text-white xs:text-xs  ">
                    </Div>
                </Div>
                <div className="w-full h-96 bg-center bg-cover" style={{ backgroundImage: `url(https://www.youramalficoast.com/assets/images/public/trips/big/wine-tasting_1518174566.jpg)`}}></div>
            </Div>
        </>
    );
}
