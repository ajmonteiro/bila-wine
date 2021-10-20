import React from 'react'

interface ButtonProps {
    text: string,
    onclick?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button className=''>{props.text}</button>
        </>
    )
}