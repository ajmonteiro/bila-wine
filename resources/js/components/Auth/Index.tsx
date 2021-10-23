import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
export default function Index() {
    const [visible, setvisible] = useState<'register' | 'login'>('login')

    return (
        <>
            {visible === 'login' ? <Login visible={setvisible} /> : <Register visible={setvisible} />}
        </>
    )
}