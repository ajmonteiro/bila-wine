import React, { useState } from 'react'
import Div from '../Layout/Div'

import Form from '../Layout/Form'
import Input from '../Layout/Input'

export default function Login() {
    const [username, setusername] = useState<string>('')

    console.log(username)
    return (
        <>
            <Div className='h-screen flex justify-center items-center'>
                <Form>
                    <Input type='text' value={username} placeholder='Username'
                    onChange={async (e: any) => setusername(e)} />
                </Form>
            </Div>
        </>
    )
}
