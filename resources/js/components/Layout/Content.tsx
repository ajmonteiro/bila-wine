import React from 'react'
import Div from './Div'

interface ContentProps {
    children?: React.ReactChild
}
export default function Content(props: ContentProps) {
    return (
        <>
            <div className='container w-full p-20 m-4 mx-auto my-16 text-center bg-white h-96 rounded-xl'>
                {props.children}
            </div> 
        </>
    )
}