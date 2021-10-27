import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Index from '../Auth/Index'

import Login from '../Auth/Login'
import Register from '../Auth/Register'
import StartApp from '../StartApp'

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Route exact path='/login' component={Index} />
                <Switch>
                    <Route exact path='/' component={StartApp} />

                </Switch>
            </BrowserRouter>
        </>
    )
}