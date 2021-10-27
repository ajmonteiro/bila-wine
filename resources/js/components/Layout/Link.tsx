import React from 'react'

interface LinkProps {
    path?: string
    className?: string
    children?: React.ReactChild
    onclick?: () => any
}
export default function Link(props: LinkProps) {
    return (
        <>
            <a href={props.path} 
            onClick={props.onclick}
            className={props.className || `my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0`}>
                {props.children}
            </a>
        </>
    )
}