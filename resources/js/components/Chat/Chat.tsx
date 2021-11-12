import React, { useState, useEffect } from "react";
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
            <Div className="flex justify-center">
                <Div className="mt-20 mb-16">
                    <Div className="clearfix">
                        <Div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                            this is a basic mobile chat layout, build with
                            tailwind css
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
