import React from 'react'
import api from '../Data/Api'
import Content from './Content'
import Div from './Div'
import Link from './Link'
import Paragraph from './Paragraph'

export default function TopMenu() {
    function goLogout() {
        api
    }
    return (
        <>
            <Div className='bg-white shadow dark:bg-gray-800'>
                <Div className='container px-6 py-3 mx-auto md:flex md:justify-between md:items-center'>
                    <Div className='flex items-center justify-between'>
                        <Div>
                            <a className='text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300' href='#'
                            >BILAWINE</a>
                        </Div>
                    </Div>

                    <Div className='items-center md:flex'>
                        <Div className='flex flex-col md:flex-row md:mx-6'>
                            <Link path='#'>INICIO</Link>
                            <Link path='#'>PAGINA1</Link>
                            <Link path='#'>PAGINA2</Link>
                            <Link path='#'>MEU PERFIL</Link>
                            <Link path='#' onclick={() => goLogout()}>LOGOUT</Link>
                        </Div>

                        <Div className='flex justify-center md:block'>
                            
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Content>
                <Paragraph className='mt-20 text-gray-500 text-md' text='Content page' />
            </Content>
        </>
    )
}