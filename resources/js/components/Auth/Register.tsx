import React, { useState } from 'react'
import { api } from '../Data/Api'
import Button from '../Layout/Button'
import Div from '../Layout/Div'
import Form from '../Layout/Form'
import Input from '../Layout/Input'
import Paragraph from '../Layout/Paragraph'
import { Toast } from '../Layout/ToastSuccess'

interface VisibleProps {
    visible: (e: any) => any
}

export default function Register(props: VisibleProps) {
    const [username, setusername] = useState<any>()
    const [email, setemail] = useState<any>()
    const [password, setpassword] = useState<any>()

    function register(e: any) {
        e.preventDefault()
        const form = new FormData
        form.append('name', username)
        form.append('email', email)
        form.append('password', password)

        api.post(`/api/register`, form)
        .then((res) => {
            Toast()
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <>
         <Div className='h-screen flex justify-center items-center'>
                <Form className='flex flex-col justify-center items-center'>
                    <Input type='text' value={username} placeholder='Username' onChange={(e: any) => setusername(e)} />
                    <Input type='email' value={email} placeholder='Email' onChange={(e: any) => setemail(e)} />
                    <Input type='password' value={password} placeholder='Password' onChange={(e: any) => setpassword(e)} />
                    <Button text='Register' onclick={(e: any) => register(e)}/>
                    <Div className='flex'>
                        <Paragraph text='Do you already have an account?' />
                        <Button text='Login' onclick={(e: any) => props.visible('login')}/>
                    </Div>
                </Form>
            </Div>
        </>
    )
}