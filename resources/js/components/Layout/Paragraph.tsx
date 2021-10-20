import React from 'react'

interface ParagraphProps {
    text: string
}

export default function Paragraph(props: ParagraphProps) {
    return (
        <>
            <p>{props.text}</p>
        </>
    )
}