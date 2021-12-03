import React, { useState } from 'react'
import { ButtonLarge, Div } from '../Layout/Layout'

export default function Index() {
    const [visible, setvisible] = useState<string>()
    return (
        <>
        
            <ButtonLarge text='Location' onclick={() => setvisible('location')} />
            <ButtonLarge text='Cellar' onclick={() => setvisible('cellar')} />
        </>
    )
}