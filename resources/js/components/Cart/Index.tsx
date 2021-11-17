import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { DeleteIcon, MinusIcon, PlusIcon } from "../Layout/Icons";
import {
    Div,
    Title,
    Image,
    Paragraph,
    Button,
    Link,
    Input,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableHeader,
    TableData,
    TableFooter,
} from "../Layout/Layout";
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
    const [total, settotal] = useState<number>();

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
            settotal(res.data.total);
        });
    }
    return (
        <>
            {totalItems && (
                <section className="py-1 bg-blueGray-50">
                    <Div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                        <Div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                            <Div className="block w-full overflow-x-auto">
                                <Table className="items-center bg-transparent w-full border-collapse ">
                                    <TableHead>
                                        <TableRow>
                                            <TableHeader text={"PRODUTO"} />
                                            <TableHeader text={"REMOVER"} />
                                            <TableHeader text={"PREÇO"} />
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {products?.map(
                                            (item: {
                                                id:
                                                    | React.Key
                                                    | null
                                                    | undefined;
                                                name: any;
                                                price: any;
                                            }) => (
                                                <TableRow key={item.id}>
                                                    <TableData
                                                        content={item.name}
                                                    />
                                                    <TableData
                                                        content={<DeleteIcon />}
                                                    />
                                                    <TableData
                                                        content={
                                                            item.price + "€"
                                                        }
                                                    />
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableData content={<Title className="text-xl" title={`Preço total: ${total}€`}/>} />

                                        </TableRow>
                                    </TableFooter>
                                    

                                </Table>
                            </Div>
                        </Div>
                    </Div>
                </section>
            )}
        </>
    );
}
