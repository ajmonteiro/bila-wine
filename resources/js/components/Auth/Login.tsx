import React, { useState } from 'react'
import Button from '../Layout/Button'
import Div from '../Layout/Div'

import Form from '../Layout/Form'
import Input from '../Layout/Input'
import Paragraph from '../Layout/Paragraph'

interface VisibleProps {
    visible: (e: any) => any
}
export default function Login(props: VisibleProps) {
    const [username, setusername] = useState<string>('')
    const [email, setemail] = useState<string>('')

    return (
        <>
            <Div className='h-screen flex justify-center items-center'>
                <Form className='flex flex-col justify-center items-center'>
                    <Input type='text' value={username} placeholder='Username' onChange={(e: any) => setusername(e)} />
                    <Input type='email' value={email} placeholder='Email' onChange={(e: any) => setemail(e)} />
                    <Button text='Submit'/>
                    <Div className='flex'>
                        <Paragraph text='No account?' />
                        <Button text='Register' onclick={(e: any) => props.visible('register')}/>
                    </Div>
                </Form>
            </Div>
        </>
    )
}
