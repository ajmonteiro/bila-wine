import React, { useState } from "react";

interface AdminMenuItemProps {
    text: string;
    onclick?: () => any;
    className?: string;
}

export function AdminMenuItem(props: AdminMenuItemProps) {
    return (
        <>
            <p
                onClick={props.onclick}
                className={
                    props.className ||
                    "flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }
            >
                {props.text}
            </p>
        </>
    );
}
interface InputProps {
    value: any;
    placeholder?: string;
    type: string;
    onChange: (e: any) => any;
}

export function Input(props: InputProps) {
    const [value, setvalue] = useState<any>("");

    function changeInput(event: any) {
        props.onChange(event.currentTarget.value);
        setvalue(event.currentTarget.value);
    }

    return (
        <>
            <Div className="w-full">
                <Div className="relative">
                    <input
                        className="rounded-lg border-transparent flex-1 m-3 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type={props.type}
                        value={value}
                        placeholder={props.placeholder}
                        onChange={(e) => changeInput(e)}
                    />
                </Div>
            </Div>
        </>
    );
}

interface TitleProps {
    title: string;
    className?: string;
}

export function Title(props: TitleProps) {
    return (
        <>
            <h1 className={props.className}>{props.title}</h1>
        </>
    );
}

interface ParagraphProps {
    text: string;
    className?: string;
    onclick?: () => any;
}

export function Paragraph(props: ParagraphProps) {
    return (
        <>
            <p className={props.className} onClick={props.onclick}>
                {props.text}
            </p>
        </>
    );
}

interface TableRowProps {
    children: React.ReactNode;
}

export function TableRow(props: TableRowProps) {
    return (
        <>
            <tr>{props.children}</tr>
        </>
    );
}

interface TableDataProps {
    content: any;
}

export function TableData(props: TableDataProps) {
    return (
        <>
            <td className="border px-4 py-2">{props.content}</td>
        </>
    );
}

interface TableProps {
    children: React.ReactNode | React.ReactChildren;
}

export function Table(props: TableProps) {
    return (
        <>
            <table className="table-auto">{props.children}</table>
        </>
    );
}

interface TableHeadProps {
    children: React.ReactNode | React.ReactChildren;
}

export function TableHead(props: TableHeadProps) {
    return (
        <>
            <thead>{props.children}</thead>
        </>
    );
}

interface TableHeaderProps {
    text: string;
}

export function TableHeader(props: TableHeaderProps) {
    return (
        <>
            <th className="px-4 py-2">{props.text}</th>
        </>
    );
}

interface TableBodyProps {
    children: React.ReactNode | React.ReactChildren;
}

export function TableBody(props: TableBodyProps) {
    return (
        <>
            <tbody>{props.children}</tbody>
        </>
    );
}

interface TableFooterProps {
    children: React.ReactNode;
}

export function TableFooter(props: TableFooterProps) {
    return (
        <>
            <tfoot>{props.children}</tfoot>
        </>
    );
}

interface ButtonProps {
    text: string;
    className?: string;
    onclick?: (e: any) => any;
}

export function Button(props: ButtonProps) {
    return (
        <>
            <button
                className={
                    props.className ||
                    "inline-block border border-purple-500 rounded py-1 px-3 m-1 bg-purple-500 text-white"
                }
                onClick={props.onclick}
            >
                {props.text}
            </button>
        </>
    );
}

export function ButtonLarge(props: ButtonProps) {
    return (
        <>
            <button
                className={
                    props.className ||
                    "inline-block border border-purple-500 rounded py-3 px-6 m-1 bg-purple-500 text-white"
                }
                onClick={props.onclick}
            >
                {props.text}
            </button>
        </>
    );
}

interface ContentProps {
    children?: React.ReactNode;
}

export function Content(props: ContentProps) {
    return (
        <>
            <div className="container w-full pb-20 pl-20 pr-20 m-4 mx-auto my-16 text-center bg-white h-96 rounded-xl">
                {props.children}
            </div>
        </>
    );
}

interface ClassProps {
    className?: string;
    children?: React.ReactNode;
}

export function Div(props: ClassProps) {
    return (
        <>
            <div className={props.className}>{props.children}</div>
        </>
    );
}

interface LinkProps {
    path?: string;
    className?: string;
    children?: React.ReactNode;
    onclick?: () => any;
}
export function Link(props: LinkProps) {
    return (
        <>
            <a
                href={props.path}
                onClick={props.onclick}
                className={
                    props.className ||
                    `my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0`
                }
            >
                {props.children}
            </a>
        </>
    );
}

interface FormProps {
    onSubmit?: () => void;
    children: React.ReactNode;
    className?: string;
}

export function Form(props: FormProps) {
    return (
        <>
            <form onSubmit={props.onSubmit} className={props.className}>
                {props.children}
            </form>
        </>
    );
}
