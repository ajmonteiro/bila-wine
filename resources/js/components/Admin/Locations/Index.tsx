import React, { useState } from 'react'
import api from '../../Data/Api'
import { getToken } from '../../Data/Auth'
import { Button, Div, Form, Input, Link, Table, TableBody, TableData, TableHead, TableHeader, TableRow } from '../../Layout/Layout'
import { ToastError, ToastSuccess } from '../../Layout/Toast'
import TopMenu from '../../Layout/TopMenu'

export default function Admin() {
    return (
        <>
            <TopMenu />
        </>
    )
}

export function LocationPage() {
    const [visible, setvisible] = useState<'create' | 'list'>('list')
    return (
        <>
            <Div className='flex justify-center items-center'>
                <Button className='inline-block border border-green-500 rounded py-1 px-3 m-1 bg-green-500 text-white' onclick={() => setvisible('create')} text='Create new' />
                <Button className='inline-block border border-green-500 rounded py-1 px-3 m-1 bg-green-500 text-white' onclick={() => setvisible('list')} text='List' />
            </Div>
            {visible == 'create' ? <Create /> : <List />}
        </>
    )
}

export function List() {
    return (
        <>
            <Div className='flex justify-center'>
                <Table>
                    <TableHead>
                        <TableHeader text='ID' />
                        <TableHeader text='Name' />
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableData content='1' />
                            <TableData content='Até é' />
                        </TableRow>
                        <TableRow>
                            <TableData content='1' />
                            <TableData content='Até é' />
                        </TableRow>
                    </TableBody>
                </Table>
            </Div>
        </>
    )
}

export function Create() {
    const [name, setname] = useState<any>()

    function create(e: any) {
        e.preventDefault()
        const form = new FormData()
        form.append('name', name)
        api.post(`/api/location`, form, {
            headers: { Authorization: `Bearer ${getToken()}` }
        }).then((res) => {
            ToastSuccess('Succesfully added', 'bottom-center')
        }).catch(err => {
            ToastError()
        })
    }
    return (
        <>
            <Div className='w-50 flex flex-column justify-center items-center'>
                <Form>
                    <Input type='text' onChange={(e) => setname(e)} value={name} placeholder='Name' />
                    <Button className='inline-block border border-green-500 rounded py-1 px-3 m-1 bg-green-500 text-white' text='Create' onclick={(e: any) => create(e)} />
                </Form>
            </Div>
        </>
    )
}