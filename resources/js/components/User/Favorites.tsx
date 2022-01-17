import React, { useState, useEffect } from "react";
import api from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div } from "../Layout/Layout";

export default function Favorites() {
    const [favorites, setFavorites] = useState<any>();

    useEffect(() => {
        api.get(`/api/favorites`, { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            setFavorites(res.data.favorites)
        })
    }, [])
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">
                        Os meus favoritos
                    </h3>
                </Div>
                <Div className="favorites-grid">
                    {favorites?.map((item: { id: number, name: string }) => (
                        <Div key={item.id}>
                            {item.name}
                        </Div>
                    ))}
                </Div>
            </Div>
        </>
    );
}
