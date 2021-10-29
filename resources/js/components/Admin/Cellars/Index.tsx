import React, { useEffect, useState } from 'react'
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

export function CellarPage() {
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
    const [cellars, setcellars] = useState<any>()

    useEffect(() => {
        getCellars()
    }, [])

    function getCellars(page: number = 1) {
        api.get('/api/cellars', {
            headers: { Authorization: `Bearer ${getToken()}` }
        }).then((res) => {
            setcellars(res.data.cellars)
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
                        <TableHeader text='Description' />
                    </TableHead>
                    <TableBody>
                        {cellars && cellars.data.map((item: { 
                            id: React.Key | null | undefined, 
                            title: string,
                            description: string 
                        }) => (
                            <TableRow key={item.id}>
                                <TableData content={item.id} />
                                <TableData content={item.title} />
                                <TableData content={item.description ? item.description : '---'} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Div>
        </>
    )
}

export function Create() {
    const [title, settitle] = useState<any>()
    const [description, setdescription] = useState<any>()
    const [locations, setlocations] = useState<any>()
    const [selectedLocation, setSelectedLocation] = useState<any>()
    const [image, setimage] = useState<any>()
    const [price, setprice] = useState<any>()
    useEffect(() => {
        getLocations()
    }, [])

    function getLocations() {
        api.get('/api/locations', { headers: { Authorization: `Bearer ${getToken()}`}
        }).then((res) => {
            setlocations(res.data.locations)
        }).catch((err) => {
            console.log(err.response)
        })
    }

    function create(e: any) {
        e.preventDefault()
        const form = new FormData()
        form.append('title', title)
        form.append('description', description)
        form.append('location_id', selectedLocation)
        form.append('image', image)
        form.append('price', price)

        api.post(`/api/cellar`, form, {
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
                    <Input type='text' onChange={(e) => settitle(e)} value={title} placeholder='Title' />
                    <Input type='text' onChange={(e) => setdescription(e)} value={description} placeholder='Description' />
                    <input type='file' onChange={(e) => setimage(e.target.files)} value={image} />
                    <Input type='text' onChange={(e) => setprice(e)} value={price} placeholder='Price' />
                    <select onChange={(e) => setSelectedLocation(e.target.value)}>
                        {locations && locations.map((item: { id: string | number | undefined; name: string }) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    <Button className='inline-block border border-green-500 rounded py-1 px-3 m-1 bg-green-500 text-white' text='Create' onclick={(e: any) => create(e)} />
                </Form>
            </Div>
        </>
    )
}