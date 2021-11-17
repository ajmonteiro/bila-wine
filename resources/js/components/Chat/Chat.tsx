import React, { useState, useEffect } from "react";
import { MessageIcon } from "../Layout/Icons";
import { Div, Title } from "../Layout/Layout";
import TopMenu from "../Layout/TopMenu";

export default function Chat() {
    return (
        <>
            <TopMenu />
            <ChatCard />
        </>
    );
}

export function ChatCard() {
    return (
        <>
            <Div className="flex justify-center mt-5">
                <Title className="text-4xl" title={"LIVE CHAT"} />
            </Div>
            <Div className="flex justify-center mt-5">
                <Div className="w-1/3">
                    <Div className="flex flex-col justify-start border rounded-xl">
                    <Div className="flex justify-center border rounded-xl">
                        <Div className="mt-20 mb-16">
                                <Div className="bg-gray-200 w-3/4 mx-4 my-2 p-2 rounded-lg">
                                    this is a basic mobile chat layout, build
                                    with tailwind css
                                </Div>
                                <Div className="bg-gray-100 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                                    check my twitter to see when it will be
                                    released.
                            </Div>
                        </Div>
                    </Div>
                    <Div className="flex justify-center w-full">
                        <textarea
                            className="m-2  px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
                            placeholder="Mensagem"
                        ></textarea>
                        <button className="m-2">
                            <MessageIcon />
                        </button>
                    </Div>
                </Div>
                </Div>
            </Div>
        </>
    );
}
