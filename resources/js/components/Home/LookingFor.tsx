import React from 'react'
import { Title } from '../Layout/Layout'
import Events from './Events'

export default function LookingFor() {
    return (
        <>
            <Title className="text-2xl font-extrabold mt-5 tracking-tight text-gray-900" 
            title={"Á procura de eventos?"} />
            <Events />
        </>
    )
}