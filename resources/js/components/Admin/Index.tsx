import React, { useState } from 'react'
import { ButtonLarge, Div } from '../Layout/Layout'
import { LocationPage } from './Locations/Index'

export default function Index() {
    const [visible, setvisible] = useState<string>()
    return (
        <>
            <ButtonLarge text='Location' onclick={() => setvisible('location')} />
            <ButtonLarge text='Cellar' onclick={() => setvisible('cellar')} />
                {visible == 'location' && <LocationPage />}
        </>
    )
}