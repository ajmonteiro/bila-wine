import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div } from "../Layout/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

interface BannerProps {
    title: any;
    text: any;
}

export default function Banner(props: BannerProps) {
    const [banners, setbanners] = useState<any>();

    function getBanners() {
        api.get(`/api/banners`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setbanners(res.data.banners);
        })
    }
    useEffect(() => {
        getBanners();
    }, []);
    return (
        <>
            <Div className="w-full z-0 px-6 mt-10">
                <Splide
                    options={{
                        rewind: true,
                        autoplay: true,
                        type: "loop",
                        perMove: 1,
                        arrows: false,
                        pagination: false,
                        rewindSpeed: 2,
                    }}
                >
                    {banners?.map((item: any) => (
                        <SplideSlide>
                            <div
                                style={{
                                    backgroundImage:
                                        `url(` + (baseURL() + item.image) + `)`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                                className="relative rounded-lg mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-24 md:pb-24 lg:pb-24 xl:pb-24"
                            >
                                <Div className="w-11/12 sm:w-2/3">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
                                        {item.title}
                                    </h1>
                                </Div>
                                <hr className="m-5 w-64 text-center" />
                                <Div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                                    <p className="text-center text-white font-bold leading-tight">
                                        {item.subtitle}
                                    </p>
                                </Div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </Div>
        </>
    );
}
