import React, { useState } from 'react'
import Div from '../Layout/Div'

import Form from '../Layout/Form'
import Input from '../Layout/Input'

export default function Login() {
    const [username, setusername] = useState<string>('')
    const [email, setemail] = useState<string>('')

    return (
        <>
            <Div className='h-screen flex justify-center items-center'>
                <Form className='flex flex-col'>
                    <Input type='text' value={username} placeholder='Username' onChange={(e: any) => setusername(e)} />
                    <Input type='email' value={email} placeholder='Email' onChange={(e: any) => setemail(e)} />
                </Form>
            </Div>
        </>
    )
}
