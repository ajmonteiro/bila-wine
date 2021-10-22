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
                className="border-2 m-1 rounded-full border-red-300 focus:border-red-500"
                type={props.type}
                value={value}
                placeholder={props.placeholder}
                onChange={(e) => changeInput(e)}
            />
        </>
    );
}
