import React from 'react'

interface FormProps {
    onSubmit?: () => void,
    children: React.ReactNode
}
export default function Form(props: FormProps) {
    return (
        <>
            <form onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </>
    )
}