import React, { useState, useEffect, ChangeEvent } from 'react'


interface InputProps {
    value: any
    placeholder?: string
    type: string
    onChange: (e: any) => any
}

export default function Input(props: InputProps) {
    const [value, setvalue] = useState<any>('')


    function changeInput(event: any) {
        props.onChange(event.currentTarget.value)
        setvalue(event.currentTarget.value)
    }

    return (
        <>
            <input
                className="px-3 py-4 m-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                type={props.type}
                value={value}
                placeholder={props.placeholder}
                onChange={(e) => changeInput(e)}
            />
        </>
    );
}
