import React from "react";
import { Button, Div, Title } from "./Layout";
import TopMenu from "./Menu";

export default function NotFound() {

    function changePage() {
        window.open(`/`, `_self`)
    }
    return (
        <>
            <TopMenu />
           <Div className={"flex flex-col justify-center items-center text-center mt-24"}>
               <Div>
                   <h1 className={"text-6xl font-bold"}>Oops...</h1>
               </Div>
               <Div className={"font-semibold mt-10"}>
                   <p>Não conseguimos encontrar esta página.</p>
               </Div>
               <Div>
                   <hr className="w-96 mt-10"/>
               </Div>
               <Div className={"mt-10 button-404"}>
                   <button onClick={() => changePage()}>Voltar</button>
               </Div>
           </Div>
        </>
    );
}
