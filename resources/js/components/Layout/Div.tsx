import React from 'react'

interface ClassProps {
    className?: string,
    children?: React.ReactNode
}

export default function Div(props: ClassProps) {
    return (
        <>
            <div className={props.className}>
                {props.children}
            </div>
        </>
    )
}