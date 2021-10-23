import React from 'react'

interface ButtonProps {
    text: string,
    className?: string,
    onclick?: (e: any) => any
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button className={props.className} onClick={props.onclick}>{props.text}</button>
        </>
    )
}