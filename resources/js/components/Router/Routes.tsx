import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Login from '../Auth/Login'
import Register from '../Auth/Register'

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Route exact path='/' component={Login} />
                <Switch>
                    <Route exact path='/register' component={Register} />
                </Switch>
            </BrowserRouter>
        </>
    )
}