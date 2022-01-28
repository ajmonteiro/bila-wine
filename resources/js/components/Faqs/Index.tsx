import React, { useState, useEffect } from "react";
import Footer from "../Layout/Footer";
import { Div } from "../Layout/Layout";
import Navbar from "../Layout/Navbar/Navbar";

export default function Faqs() {
    const [faqNumber1, setFaqNumber1] = useState<any>();
    const [faqNumber2, setFaqNumber2] = useState<any>();
    const [faqNumber3, setFaqNumber3] = useState<any>();

    return (
        <>
            <Navbar />

            <Div className="faqs">
                <Div className="faqs-grid">
                    <h1 className="text-xl mb-3">PERGUNTAS FREQUENTES</h1>
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber1(!faqNumber1)}
                    >
                        <span>COMO POSSO EFETUAR UMA ENCOMENDA?</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber1 && (
                        <Div>
                            <p className="p-4">
                                Para fazer uma encomenda terá de adicionar
                                produtos/eventos ao seu{" "}
                                <span onClick={() => window.open(`/carrinho`)}>
                                    <em>carrinho</em>
                                </span>
                            </p>
                        </Div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber2(!faqNumber2)}
                    >
                        <span>COMO SÃO ENVIADAS AS NOSSAS EMBALAGENS?</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber2 && (
                        <Div>
                            <p className="p-4">
                                Em todas as encomendas, serão utilizadas
                                embalagens próprias para o envio de garrafas que
                                protegem eficazmente o seu conteúdo. Através da
                                Loja Online da Bila Wine são aceites pagamentos
                                por Stripe
                            </p>
                        </Div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber3(!faqNumber3)}
                    >
                        <span>COMO POSSO DEVOLVER UM PRODUTO?</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber3 && (
                        <Div>
                            <p className="p-4">
                                Se desejar devolver as garrafas, por favor entre
                                em contato com Porto Wine House através do
                                info@bilawine.pt, no prazo de 15 dias da sua
                                compra
                            </p>
                        </Div>
                    )}
                </Div>
            </Div>
            <div className="mt-10">
                <Footer />
            </div>
        </>
    );
}
