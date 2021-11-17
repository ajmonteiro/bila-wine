import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { MinusIcon, PlusIcon } from "../Layout/Icons";
import { Div, Title, Image, Paragraph, Button, Link, Input } from "../Layout/Layout";
import TopMenu from "../Layout/TopMenu";

export default function Cart() {
    return (
        <>
            <TopMenu />
            <CartPage />
        </>
    );
}

export function CartPage() {
    const [totalItems, setTotalItems] = useState<any>();
    const [products, setProducts] = useState<any>();

    useEffect(() => {
        getCartFromUser();
    }, []);

    /**
     * @returns @array_products
     * @id - id_user
     */
    function getCartFromUser() {
        api.get(`/api/cart/{id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
            setProducts(res.data.cart);
            setTotalItems(res.data.cart.length);
        });
    }
    return (
        <>
            {totalItems && (
                <Div className="container">
                    <Div className="container mx-auto mt-10">
                        <Div className="flex shadow-md my-10">
                            <Div className="w-3/4 bg-white px-10 py-10">
                                <Div className="flex justify-between border-b pb-8">
                                    <Title
                                        title={"CARRINHO"}
                                        className="font-semibold text-2xl"
                                    />
                                    <Title
                                        title={totalItems + "items"}
                                        className="font-semibold text-2xl"
                                    />
                                </Div>
                                <Div className="flex mt-10 mb-5">
                                    <Title
                                        title={"Detalhes"}
                                        className="font-semibold text-gray-600 text-xs uppercase w-2/5"
                                    />
                                    <Title
                                        title={"Quantidade"}
                                        className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
                                    />
                                    <Title
                                        title={"Preço"}
                                        className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
                                    />
                                    <Title
                                        title={"Total"}
                                        className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
                                    />
                                </Div>
                                {products?.map(
                                    (item: {
                                        image: string;
                                        name: string;
                                        category_name: string;
                                        price: string;
                                    }) => (
                                        <Div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                            <Div className="flex w-2/5">
                                                <Div className="w-20">
                                                    <Image
                                                        path={
                                                            baseURL() +
                                                            item.image
                                                        }
                                                    />
                                                </Div>
                                                <Div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <Paragraph
                                                        className="font-bold text-sm"
                                                        text={item.name}
                                                    />
                                                    <Paragraph
                                                        className="text-red-500 text-xs"
                                                        text={
                                                            item.category_name
                                                        }
                                                    />
                                                    <Link className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                                                        <Paragraph text={"Remover"} />
                                                    </Link>
                                                </Div>
                                            </Div>
                                            <Div className="flex justify-center w-1/5">
                                                <MinusIcon />

                                                <input
                                                    className="mx-2 border text-center w-8"
                                                    type="text"
                                                    value="1" onChange={function (e: any) {
                                                        throw new Error("Function not implemented.");
                                                    } }                                                />

                                                <PlusIcon />
                                            </Div>
                                            <Paragraph text={item.price + '€'} className="text-center w-1/5 font-semibold text-sm" />
                                            <span className="text-center w-1/5 font-semibold text-sm">
                                                $400.00
                                            </span>
                                        </Div>
                                    )
                                )}

                                <a
                                    href="#"
                                    className="flex font-semibold text-indigo-600 text-sm mt-10"
                                >
                                    <svg
                                        className="fill-current mr-2 text-indigo-600 w-4"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                    </svg>
                                    Continue Shopping
                                </a>
                            </Div>

                            <Div className="w-1/4 px-8 py-10">
                                <h1 className="font-semibold text-2xl border-b pb-8">
                                    Order Summary
                                </h1>
                                <Div className="flex justify-between mt-10 mb-5">
                                    <span className="font-semibold text-sm uppercase">
                                        Items 3
                                    </span>
                                    <span className="font-semibold text-sm">
                                        590$
                                    </span>
                                </Div>
                                <Div>
                                    <label className="font-medium inline-block mb-3 text-sm uppercase">
                                        Shipping
                                    </label>
                                    <select className="block p-2 text-gray-600 w-full text-sm">
                                        <option>
                                            Standard shipping - $10.00
                                        </option>
                                    </select>
                                </Div>
                                <Div className="py-10">
                                    <label
                                        htmlFor="promo"
                                        className="font-semibold inline-block mb-3 text-sm uppercase"
                                    >
                                        Promo Code
                                    </label>
                                    <input
                                        type="text"
                                        id="promo"
                                        placeholder="Enter your code"
                                        className="p-2 text-sm w-full"
                                    />
                                </Div>
                                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                                    Apply
                                </button>
                                <Div className="border-t mt-8">
                                    <Div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                        <span>Total cost</span>
                                        <span>$600</span>
                                    </Div>
                                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                        Checkout
                                    </button>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            )}
        </>
    );
}
