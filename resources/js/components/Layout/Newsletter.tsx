import React, { useState, useEffect } from "react";
import { SendIcon } from "./Icons";
import { Button, Div, Input, Paragraph } from "./Layout";

export default function Newsletter() {
    const [email, setemail] = useState<any>();

    function registerNewsletter(e: any) {
        
    }
    return (
        <>
            <Div className="flex justify-center items-center p-3">
                <Div className="">
                    <Paragraph
                        text={"Subscreve a nossa newsletter"}
                        className="mr-2"
                    />
                </Div>
                <Div className="">
                    <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Email"
                    />
                    {/* <Input value={email} type={"text"} onChange={(e) => setemail(e)} /> */}
                </Div>
                <Div className="">
                    <button className="ml-2"><SendIcon onclick={(e: any) => registerNewsletter(e)}/></button>
                </Div>

            </Div>
        </>
    );
}
