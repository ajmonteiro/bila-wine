import React, { useState } from "react";
import { Route, Switch } from "react-router";
import {
    AddIcon,
    ClientIcon,
    HomeIcon,
    ListIcon,
    TrashIcon,
} from "../../Layout/Icons";
import {
    AdminMenuItem,
    Content,
    Div,
    Link,
    Paragraph,
    Image,
    Title,
    Button,
} from "../../Layout/Layout";
import ButtonGoBack from "./ButtonGoBack";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
    return (
        <>
            <Dashboard />
            <ButtonGoBack />
        </>
    );
}
