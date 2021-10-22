import React from 'react'
import Div from './Layout/Div';
import Routes from './Router/Routes';

export default function App() {
    return (
        <>
            <Div className='h-screen'>
                <Routes />
            </Div>
        </>
    );
}
