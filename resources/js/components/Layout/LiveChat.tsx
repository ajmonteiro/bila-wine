import React, { useState, useEffect } from "react";
import { ButtonLarge, Div, Input } from "./Layout";

export default function LiveChat() {
    const [visible, setvisible] = useState<any>(false);
    const [chatHandle, setChatHandle] = useState<any>(true);

    return (
        <>
            <Div className="btn-chat" id="livechat-compact-container">
                {chatHandle && (
                    <Div
                        className="btn-holder"
                        id="chat-button-handler"
                        onclick={() => {
                            setvisible(!visible), setChatHandle(!chatHandle);
                        }}
                    >
                        <i className="lab la-rocketchat"></i>
                    </Div>
                )}
                {visible && (
                    <Div id="chat-handler">
                        <Div
                            className="flex justify-end"
                            onclick={() => {
                                setvisible(!visible),
                                    setChatHandle(!chatHandle);
                            }}
                        >
                            <i className="las la-minus"></i>
                        </Div>
                        <Div className="flex flex-col justify-center items-center m-5">
                            <h1>Fale connosco!</h1>
                            <input
                                type="text"
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                placeholder="E-mail"
                            />

                            <textarea
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                placeholder="Mensagem"
                            ></textarea>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-2 px-4 rounded">
                                Enviar mensagem
                            </button>
                        </Div>
                    </Div>
                )}
            </Div>
        </>
    );
}
