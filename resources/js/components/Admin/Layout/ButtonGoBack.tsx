import React, { useState, useEffect } from "react";
import { ButtonLarge, Div, Input } from "../../../components/Layout/Layout";

export default function ButtonGoBack() {
    const [visible, setvisible] = useState<any>(false);
    const [chatHandle, setChatHandle] = useState<any>(true);

    return (
        <>
            <Div className="btn-chat" id="livechat-compact-container">
                <Div
                    className="btn-holder"
                    id="chat-button-handler"
                    onclick={() => {
                        setvisible(!visible), setChatHandle(!chatHandle);
                    }}
                >
                    <span className="mb-10 font-bold text-2xl">Voltar</span>
                </Div>
            </Div>
        </>
    );
}
