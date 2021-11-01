import React, { useState, useEffect } from "react";
import api, { baseURL } from "../Data/Api";
import { getToken } from "../Data/Auth";
import { Button, Div, Image, Link, Paragraph } from "../Layout/Layout";

export default function Events() {
    const [events, setevents] = useState<any>();
    useEffect(() => {
        getEvents();
    }, []);
    function getEvents() {
        api.get("/api/events", {
            headers: { Authorization: `Bearer ${getToken()}` },
        }).then((res) => {
            setevents(res.data.events);
        });
    }
    return (
        <>
            <Div className="-mt-52">
               
            </Div>
        </>
    );
}
