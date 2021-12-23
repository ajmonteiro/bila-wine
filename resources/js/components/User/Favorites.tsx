import React, { useState, useEffect } from "react";
import { Button, Div } from "../Layout/Layout";

export default function Favorites() {
    return (
        <>
            <Div>
                <Div className="flex align-baseline">
                    <h3 className="text-xl ml-4 order-text">
                        Os meus favoritos
                    </h3>
                </Div>
                <Div className="favorites-grid">
                    <Div>
                        <span>Vinho branco</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                    <Div>
                        <span>Produto</span>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
