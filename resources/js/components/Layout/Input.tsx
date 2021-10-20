import React from 'react'

interface InputProps {
    value?: string,
    placeholder?: string,
    type: string
}

export default function Input(props: InputProps) {
    return (
        <>
            <input type={props.type} value={props.value} placeholder={props.placeholder} />
        </>
    )
}