import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../Data/Api'
import { Button, Div, Form, Input, Paragraph } from '../Layout/Layout'
import { loginlocal } from '../Data/Auth'
import { getToken } from '../Data/Auth'
import { ToastError } from '../Layout/Toast'

interface VisibleProps {
    visible: (e: any) => any
}
export default function Login(props: VisibleProps) {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const history = useHistory()
    const token = getToken()

    function login(e: any) {
        e.preventDefault()
        const url = `/api/login`
        const form = new FormData

        form.append('email', email)
        form.append('password', password)

        api.defaults.withCredentials = true

        api.get('/sanctum/csrf-cookie').then(() => {
            api.post(url, form)
                .then((res: any) => {
                    console.log(res)
                    if (res.data.user) {
                        loginlocal(res.data.token)
                        history.push(`/`)
                    }
                }).catch((err) => {
                    if(err.response.data.errors.email[0]) {
                        ToastError(err.response.data.errors.email[0])
                    }
                    if(err.response.data.errors.password[0]) {
                        ToastError(err.response.data.errors.password[0])
                    }
                })
        })
    }
    return (
        <>
            {token ? history.push('/') :
                <Div className='h-screen flex justify-center items-center'>
                    <Form className='flex flex-col justify-center items-center'>
                        <Input type='email' value={email} placeholder='Email' onChange={(e: any) => setemail(e)} />
                        <Input type='password' value={password} placeholder='Password' onChange={(e: any) => setpassword(e)} />
                        <Button text='Submit' onclick={(e: any) => login(e)} />
                        <Div className='flex'>
                            <Paragraph text='No account?' />
                            <Button text='Register' onclick={(e: any) => props.visible('register')} />
                        </Div>
                    </Form>
                </Div>}
        </>
    )
}
