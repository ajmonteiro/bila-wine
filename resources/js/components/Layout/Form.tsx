import React from 'react'

interface FormProps {
    onSubmit?: () => void,
    children: React.ReactNode,
    className?: string
}
export default function Form(props: FormProps) {
    return (
        <>
            <form onSubmit={props.onSubmit} className={props.className}>
                {props.children}
            </form>
        </>
    )
}