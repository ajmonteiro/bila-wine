import React from 'react'

interface TitleProps {
    title: string
}

export default function Title(props: TitleProps) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}