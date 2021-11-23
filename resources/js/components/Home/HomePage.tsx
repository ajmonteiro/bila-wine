import React from "react";
import { baseURL } from "../Data/Api";
import Header from "../Layout/Header";
import { Div, Title, Image } from "../Layout/Layout";
import Banner from "./Banner";
import Events from "./Events";
import LookingFor from "./LookingFor";
import Products from "./Products";

export default function HomePage() {
    return (
        <>
            <Banner />
            <LookingFor />
            <Products />
        </>
    );
}
