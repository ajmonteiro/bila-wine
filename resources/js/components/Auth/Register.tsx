import React, { useState } from 'react'
import Button from '../Layout/Button'
import Div from '../Layout/Div'
import Form from '../Layout/Form'
import Input from '../Layout/Input'
import Paragraph from '../Layout/Paragraph'

export default function Register() {
    const [username, setusername] = useState<any>()
    const [email, setemail] = useState<any>()
    const [password, setpassword] = useState<any>()

    function register(e: any) {
        e.preventDefault()
        const form = new FormData
        form.append('name', username)
        form.append('email', email)
        form.append('password', password)

        console.log(form)
    }

    return (
        <>
         <Div className='h-screen flex justify-center items-center'>
                <Form className='flex flex-col justify-center items-center'>
                    <Input type='text' value={username} placeholder='Username' onChange={(e: any) => setusername(e)} />
                    <Input type='email' value={email} placeholder='Email' onChange={(e: any) => setemail(e)} />
                    <Input type='password' value={password} placeholder='Password' onChange={(e: any) => setpassword(e)} />
                    <Button text='Register' onclick={(e: any) => register(e)}/>
                </Form>
            </Div>
        </>
    )
}