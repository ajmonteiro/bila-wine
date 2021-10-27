import React from 'react'
import Content from './Content'
import Div from './Div'
import Link from './Link'

export default function TopMenu() {
    return (
        <>
            <nav className="bg-white shadow dark:bg-gray-800">
                <Div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
                    <Div className="flex items-center justify-between">
                        <Div>
                            <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#"
                            >Brand</a>
                        </Div>
                        <Div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    ></path>
                                </svg>
                            </button>
                        </Div>
                    </Div>

                    <Div className="items-center md:flex">
                        <Div className="flex flex-col md:flex-row md:mx-6">
                            <Link path="#">Home</Link>
                            <Link path="#">Home</Link>
                            <Link path="#">Home</Link>
                            <Link path="#">Home</Link>
                        </Div>

                        <Div className="flex justify-center md:block">
                            
                        </Div>
                    </Div>
                </Div>
            </nav>
            <Content>
                <p className="mt-20 italic text-gray-500 text-md">-- Content of your page --</p>
            </Content>
        </>
    )
}