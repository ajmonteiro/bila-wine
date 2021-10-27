import React from 'react'

interface ParagraphProps {
    text: string
    className?: string
}

export default function Paragraph(props: ParagraphProps) {
    return (
        <>
            <p className={props.className}>{props.text}</p>
        </>
    )
}