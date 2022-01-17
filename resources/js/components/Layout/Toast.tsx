import React from 'react'
import cogoToast from 'cogo-toast'

export const ToastSuccess = (message: string = 'Successo', position: any = 'bottom-right') => cogoToast.success(`${message}`, {
    position: position,
    heading: 'Successo',
    hideAfter: 2
})

export const ToastError = (message:string = 'Algo correu mal') => cogoToast.error(`${message}`, {
    position: 'top-center',
    heading: 'Erro',
    hideAfter: 2
})

export const ToastInfo = (message:string = 'Info') => cogoToast.info(`${message}`, {
    position: 'top-center',
    heading: 'Informação',
    hideAfter: 2
})

export const ToastLoading = (message:string = 'A carregar...') => cogoToast.loading(`${message}`, {
    position: 'top-center',
    heading: 'Loading',
    hideAfter: 2
}) 

export const ToastWarniing = (message:string = 'Warning') => cogoToast.warn(`${message}`, {
    position: 'top-center',
    heading: 'Warning',
    hideAfter: 2
})