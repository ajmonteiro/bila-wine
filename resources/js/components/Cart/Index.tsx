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
     */
    function getCartFromUser() {
        api.get(`/api/cart`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            console.log(res);
            setProducts(res.data.cart);
            setTotalItems(res.data.cart.length);
            settotal(res.data.total);
        });
    }

    function handleDelete(e: any, id: number) {
        console.log(id);
        api.delete(`/api/cart/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            getCartFromUser();
        });
    }
    return (
        <>
            {totalItems && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader text={"#"} />
                                <TableHeader text={"PRODUTO"} />
                                <TableHeader text={"REMOVER"} />
                                <TableHeader text={"PREÇO"} />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products?.map(
                                (item: {
                                    id: any;
                                    name: any;
                                    price: any;
                                    image: any;
                                }) => (
                                    <TableRow key={item.id}>
                                        <TableData
                                            content={
                                                <Image
                                                    path={
                                                        baseURL() + item.image
                                                    }
                                                    width={"100"}
                                                />
                                            }
                                        />
                                        <TableData content={item.name} />
                                        <TableData
                                            content={
                                                <DeleteIcon
                                                    className="cursor-pointer"
                                                    onclick={(e: any) =>
                                                        handleDelete(e, item.id)
                                                    }
                                                />
                                            }
                                        />
                                        <TableData content={item.price + "€"} />
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableData
                                    content={
                                        <Title
                                            className="text-xl"
                                            title={`Preço total: ${total}€`}
                                        />
                                    }
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
            )}
        </>
    );
}
