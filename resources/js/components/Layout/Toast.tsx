import React from 'react'
import cogoToast from 'cogo-toast'

export const ToastSuccess = (message: string = 'Done successfully') => cogoToast.success(`${message}`, {
    position: 'top-center',
    heading: 'Success'
})

export const ToastError = (message:string = 'Something went wrong') => cogoToast.error(`${message}`, {
    position: 'top-center',
    heading: 'Error'
})