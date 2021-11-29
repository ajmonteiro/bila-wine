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
import { CategoryPage } from "../Categories/Index";
import { CellarPage } from "../Cellars/Index";
import { EventPage } from "../Events/Index";
import { LocationPage } from "../Locations/Index";
import { ProductPage } from "../Products/Index";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
    const [visible, setvisible] = useState<string>("cellar");
    return (
        <>
        <Dashboard />
        </>
    );
}
