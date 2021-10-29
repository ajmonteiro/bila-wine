import React from 'react'
import cogoToast from 'cogo-toast'

export const ToastSuccess = (message: string = 'Done successfully', position: any = 'top-center') => cogoToast.success(`${message}`, {
    position: position,
    heading: 'Success',
    hideAfter: 2
})

export const ToastError = (message:string = 'Something went wrong') => cogoToast.error(`${message}`, {
    position: 'top-center',
    heading: 'Error',
    hideAfter: 2
})

export const ToastInfo = (message:string = 'Info') => cogoToast.info(`${message}`, {
    position: 'top-center',
    heading: 'Info',
    hideAfter: 2
})

export const ToastLoading = (message:string = 'Loading') => cogoToast.loading(`${message}`, {
    position: 'top-center',
    heading: 'Loading',
    hideAfter: 2
}) 

export const ToastWarniing = (message:string = 'Warning') => cogoToast.warn(`${message}`, {
    position: 'top-center',
    heading: 'Warning',
    hideAfter: 2
})