import React from "react";
import Categories from "../Admin/Categories/Index";
import { baseURL } from "../Data/Api";
import Header from "../Layout/Header";
import { Div, Title, Image, Card } from "../Layout/Layout";
import Banner from "./Banner";
import Events from "./Events";
import LookingFor from "./LookingFor";
import Products from "./Products";
import Footer from "../Layout/Footer";
import Newsletter from "./Newsletter";

export default function HomePage() {
    return (
        <>
            <Banner text="O melhor dos vinhos" title="BILA WINE" />
            <Div className="flex justify-center m-10">
                <Div className="card-grid">
                    <Card
                        path={
                            baseURL() +
                            "/storage/4fJd8gyL14hwZEBM8jUKQcEqaGAcavgKdm3onAVm.jpg"
                        }
                        text={"Vinho até 50% de desconto"}
                        title={"As nossas grandes promoções"}
                    />
                    <Card
                        path={
                            baseURL() +
                            "/storage/4fJd8gyL14hwZEBM8jUKQcEqaGAcavgKdm3onAVm.jpg"
                        }
                        text={"Compra a preço baixo para quem mais amas"}
                        title={"Presentes a menos de 50€"}
                    />
                    <Card
                        path={
                            baseURL() +
                            "/storage/4fJd8gyL14hwZEBM8jUKQcEqaGAcavgKdm3onAVm.jpg"
                        }
                        text={"Celebra com carinho especial e um grande vinho"}
                        title={"Vinho - presentes"}
                    />
                </Div>
            </Div>

            <LookingFor />
            <Products />
            <Newsletter />
            <Footer />
        </>
    );
}
