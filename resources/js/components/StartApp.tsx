import React, { useEffect, useState } from 'react'
import Login from './Auth/Login'
import api from './Data/Api'
import { getToken } from './Data/Auth'
import Index from './Index'

export default function StartApp() {
    const [logged, setLogged] = useState()
    const token = getToken()

    return (
        <>
            {token ? <Index /> : window.open('/login', '_self') }
        </>
    )
}