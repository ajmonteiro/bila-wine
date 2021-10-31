import React, { useEffect, useState } from 'react'
import api from '../../Data/Api'
import { getToken } from '../../Data/Auth'
import { Button, Div, Form, Input, Link, Table, TableBody, TableData, TableHead, TableHeader, TableRow } from '../../Layout/Layout'
import { ToastError, ToastSuccess } from '../../Layout/Toast'
import DashboardLayout from '../Layout/DashboardLayout'

export default function Admin() {
    return (
        <>
            <DashboardLayout />
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
    const [locations, setlocations] = useState<any>()

    useEffect(() => {
        getLocations()
    }, [])

    function getLocations(page: number = 1) {
        api.get('/api/locations/paginate', {
            headers: { Authorization: `Bearer ${getToken()}` }
        }).then((res) => {
            setlocations(res.data.locations)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <Div className='flex justify-center'>
                <Table>
                    <TableHead>
                        <TableHeader text='ID' />
                        <TableHeader text='Name' />
                    </TableHead>
                    <TableBody>
                        {locations && locations.data.map((item: { id: React.Key | null | undefined; name: any }) => (
                            <TableRow key={item.id}>
                                <TableData content={item.id} />
                                <TableData content={item.name} />
                            </TableRow>
                        ))}
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