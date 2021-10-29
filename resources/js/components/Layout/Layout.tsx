import React, { useState } from 'react'

interface InputProps {
    value: any
    placeholder?: string
    type: string
    onChange: (e: any) => any
}

export function Input(props: InputProps) {
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

interface TitleProps {
    title: string
}

export function Title(props: TitleProps) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

interface ParagraphProps {
    text: string
    className?: string
}

export function Paragraph(props: ParagraphProps) {
    return (
        <>
            <p className={props.className}>{props.text}</p>
        </>
    )
}


interface TableRowProps {
    children: React.ReactNode
}

export function TableRow(props: TableRowProps) {
    return (
        <>
            <tr>
                {props.children}
            </tr>
        </>
    )
}

interface TableDataProps {
    content: any
}

export function TableData(props: TableDataProps) {
    return (
        <>
            <td className='border px-4 py-2'>{props.content}</td>
        </>
    )
}

interface TableProps {
    children: React.ReactNode
}

export function Table(props: TableProps) {
    return (
        <>
            <table className='table-auto'>{props.children}</table>
        </>
    )
}

interface TableHeadProps {
    children: React.ReactNode
}

export function TableHead(props: TableHeadProps) {
    return (
        <>
            <thead>{props.children}</thead>
        </>
    )
}

interface TableHeaderProps {
    text: string
}

export function TableHeader(props: TableHeaderProps) {
    return (
        <>
            <th className='px-4 py-2'>{props.text}</th>
        </>
    )
}

interface TableBodyProps {
    children: React.ReactNode
}

export function TableBody(props: TableBodyProps) {
    return (
        <>
            <tbody>{props.children}</tbody>
        </>
    )
}

interface TableFooterProps {
    children: React.ReactNode
}

export function TableFooter(props: TableFooterProps) {
    return (
        <>
            <tfoot>{props.children}</tfoot>
        </>
    )
}

interface ButtonProps {
    text: string,
    className?: string,
    onclick?: (e: any) => any
}

export function Button(props: ButtonProps) {
    return (
        <>
            <button className={props.className || 'inline-block border border-purple-500 rounded py-1 px-3 m-1 bg-purple-500 text-white'} onClick={props.onclick}>{props.text}</button>
        </>
    )
}

export function ButtonLarge(props: ButtonProps) {
    return (
        <>
            <button className={props.className || 'inline-block border border-purple-500 rounded py-3 px-6 m-1 bg-purple-500 text-white'} onClick={props.onclick}>{props.text}</button>
        </>
    )
}

interface ContentProps {
    children?: React.ReactNode
}


export function Content(props: ContentProps) {
    return (
        <>
            <div className='container w-full pb-20 pl-20 pr-20 m-4 mx-auto my-16 text-center bg-white h-96 rounded-xl'>
                {props.children}
            </div> 
        </>
    )
}

interface ClassProps {
    className?: string,
    children?: React.ReactNode
}

export function Div(props: ClassProps) {
    return (
        <>
            <div className={props.className}>
                {props.children}
            </div>
        </>
    )
}

interface LinkProps {
    path?: string
    className?: string
    children?: React.ReactChild
    onclick?: () => any
}
export function Link(props: LinkProps) {
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

interface FormProps {
    onSubmit?: () => void,
    children: React.ReactNode,
    className?: string
}

export function Form(props: FormProps) {
    return (
        <>
            <form onSubmit={props.onSubmit} className={props.className}>
                {props.children}
            </form>
        </>
    )
}