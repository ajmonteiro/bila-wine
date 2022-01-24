import React, { useState, useEffect } from "react";
import Footer from "../Layout/Footer";
import { Div } from "../Layout/Layout";
import Navbar from "../Layout/Navbar/Navbar";

export default function Faqs() {
    const [faqNumber1, setFaqNumber1] = useState<any>();
    const [faqNumber2, setFaqNumber2] = useState<any>();
    const [faqNumber3, setFaqNumber3] = useState<any>();
    const [faqNumber4, setFaqNumber4] = useState<any>();
    const [faqNumber5, setFaqNumber5] = useState<any>();
    const [faqNumber6, setFaqNumber6] = useState<any>();
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
                        <span>FAQ NUMERO 1</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber1 && (
                        <Div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </Div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber2(!faqNumber2)}
                    >
                        <span>FAQ NUMERO 2</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber2 && (
                        <Div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </Div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber3(!faqNumber3)}
                    >
                        <span>FAQ NUMERO 3</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber3 && (
                        <Div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </Div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber4(!faqNumber4)}
                    >
                        <span>FAQ NUMERO 4</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber4 && (
                        <Div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </Div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber5(!faqNumber5)}
                    >
                        <span>FAQ NUMERO 5</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber5 && (
                        <Div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </Div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber6(!faqNumber6)}
                    >
                        <span>FAQ NUMERO 6</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber6 && (
                        <div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber6(!faqNumber6)}
                    >
                        <span>FAQ NUMERO 6</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber6 && (
                        <div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber6(!faqNumber6)}
                    >
                        <span>FAQ NUMERO 6</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber6 && (
                        <div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber6(!faqNumber6)}
                    >
                        <span>FAQ NUMERO 6</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber6 && (
                        <div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber6(!faqNumber6)}
                    >
                        <span>FAQ NUMERO 6</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber6 && (
                        <div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </div>
                    )}
                    <div
                        className="faq-div"
                        onClick={() => setFaqNumber6(!faqNumber6)}
                    >
                        <span>FAQ NUMERO 6</span>
                        <i className="las la-angle-right"></i>
                    </div>
                    {faqNumber6 && (
                        <div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, veniam minus pariatur
                                non adipisci tenetur porro nobis numquam
                                veritatis repellendus suscipit iusto quisquam
                                temporibus voluptates inventore asperiores, sed,
                                corporis eius?
                            </p>
                        </div>
                    )}
                </Div>
            </Div>
            <div className="mt-10">
                <Footer />
            </div>
        </>
    );
}
