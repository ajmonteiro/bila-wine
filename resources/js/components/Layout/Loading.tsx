import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoadingProps {
    active: boolean;
}

export default function Loading(props: LoadingProps) {
    return (
        <>
            <div style={{
                margin: '0 auto',
                borderColor: 'red',
            }} className="h-96 flex items-center justify-center">
                <ClipLoader color={"red"} loading={props.active} size={50} />
            </div>
        </>
    );
}
