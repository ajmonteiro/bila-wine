import React from 'react'
import cogoToast from 'cogo-toast'

export const Toast = (message: string = 'Done successfully') => cogoToast.success(`${message}`, {
    position: 'top-center',
    heading: 'Information'
})