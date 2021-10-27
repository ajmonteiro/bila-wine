import React, { useState } from 'react'
import api from '../Data/Api'
import Button from '../Layout/Button'
import Div from '../Layout/Div'

import Form from '../Layout/Form'
import Input from '../Layout/Input'
import Paragraph from '../Layout/Paragraph'

interface VisibleProps {
    visible: (e: any) => any
}
export default function Login(props: VisibleProps) {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')

    function login(e: any) {
        e.preventDefault()
        const url = `/api/login`
        const form = new FormData

        form.append('email', email)
        form.append('password', password)


        api.get('/sanctum/csrf-cookie').then(() => {
            api.post(url, form)
            .then((res: any) => {
                console.log(res)

            })
        })
    }
    return (
        <>
            <Div className='h-screen flex justify-center items-center'>
                <Form className='flex flex-col justify-center items-center'>
                    <Input type='email' value={email} placeholder='Email' onChange={(e: any) => setemail(e)} />
                    <Input type='password' value={password} placeholder='Password' onChange={(e: any) => setpassword(e)} />
                    <Button text='Submit' onclick={(e: any) => login(e)}/>
                    <Div className='flex'>
                        <Paragraph text='No account?' />
                        <Button text='Register' onclick={(e: any) => props.visible('register')}/>
                    </Div>
                </Form>
            </Div>
        </>
    )
}
