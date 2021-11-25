import React from "react";

interface NoResultsFoundProps {
    title?: any | 'Sem resultados'
    text?: any | 'Não foram encontrados resultados'
}

export function NoResultsFound(props: NoResultsFoundProps) {
    return (
        <>
            <div className="bg-white flex justify-center mt-10 flex-col items-center p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {props.title}
                </h2>
                <p className="text-gray-700">{props.text}</p>
            </div>
        </>
    );
}
