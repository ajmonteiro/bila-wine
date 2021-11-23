import React, { useState } from "react";
// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
// interface PaginationProps {
//     // totalItems: 5
//     onChange: () => any
//     activePage: number
// }

// export function Paginate(props: PaginationProps) {
//     return (
//         <>
//             <Pagination
//                 totalItemsCount={5}
//                 activePage={props.activePage}
//                 onChange={() => props.onChange}
//                 itemClass="page-item"
//                 linkClass="page-link"
//             />
//         </>
//     )
// }

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

interface ImageProps {
    path: string;
    alt?: string;
    width?: any;
    height?: any;
    className?: string;
}

export function Image(props: ImageProps) {
    return (
        <>
            <img
                src={props.path}
                alt={props.alt}
                width={props.width}
                height={props.height}
                className={props.className}
            />
        </>
    );
}
interface InputProps {
    value: any;
    placeholder?: string;
    type: string;
    onChange: (e: any) => any;
    min?: number;
    max?: number;
    name?: string;
    className?: string;
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
                <Div className="flex justify-center">
                    <input
                        className={
                            props.className ||
                            "rounded-lg border-transparent flex-1 m-3 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        }
                        type={props.type}
                        value={value}
                        placeholder={props.placeholder}
                        onChange={(e) => changeInput(e)}
                        max={props.max}
                        min={props.min}
                        name={props.name}
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
    className?: string;
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
    className?: string;
    colSpan?: number;
    onclick?: () => any;
}

export function TableData(props: TableDataProps) {
    return (
        <>
            <td
                colSpan={props.colSpan}
                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"
                onClick={props.onclick}
            >
                {props.content}
            </td>
        </>
    );
}

interface TableProps {
    children: React.ReactNode | React.ReactChildren;
    className?: string;
}

export function Table(props: TableProps) {
    return (
        <>
            <section className="py-1 bg-blueGray-50">
                <Div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <Div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <Div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse">
                                {props.children}
                            </table>
                        </Div>
                    </Div>
                </Div>
            </section>
        </>
    );
}

interface TableHeadProps {
    children: React.ReactNode | React.ReactChildren;
    className?: string;
}

export function TableHead(props: TableHeadProps) {
    return (
        <>
            <thead className={props.className}>{props.children}</thead>
        </>
    );
}

interface TableHeaderProps {
    text: string;
    colspan?: number;
    className?: string;
}

export function TableHeader(props: TableHeaderProps) {
    return (
        <>
            <th
                className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                colSpan={props.colspan}
            >
                {props.text}
            </th>
        </>
    );
}

interface TableBodyProps {
    children: React.ReactNode | React.ReactChildren;
}

export function TableBody(props: TableBodyProps) {
    return (
        <>
            <tbody className="text-gray-600 text-sm font-light">
                {props.children}
            </tbody>
        </>
    );
}

interface TableFooterProps {
    className?: string;
    children: React.ReactNode;
}

export function TableFooter(props: TableFooterProps) {
    return (
        <>
            <tfoot className={props.className}>{props.children}</tfoot>
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
                    "inline-block border border-red-500 rounded py-1 px-3 m-1 bg-red-500 text-white"
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
                    "inline-block border border-red-500 rounded py-3 px-6 m-1 bg-red-500 text-white"
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
            <div className="w-full text-center bg-white rounded-xl">
                {props.children}
            </div>
        </>
    );
}

interface ClassProps {
    className?: string;
    children?: React.ReactNode;
    styles?: any;
    onclick?: (e: any) =>any
}

export function Div(props: ClassProps) {
    return (
        <>
            <div className={props.className} style={props.styles} onClick={props.onclick}>
                {props.children}
            </div>
        </>
    );
}

interface LinkProps {
    path?: string;
    className?: string;
    children?: React.ReactNode;
    onclick?: (e: any) => any;
}
export function Link(props: LinkProps) {
    return (
        <>
            <a
                href={props.path}
                onClick={props.onclick}
                className={
                    props.className ||
                    `my-1 text-red-700 dark:text-red-200 hover:text-red-500 dark:hover:text-red-400 md:mx-4 md:my-0`
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
