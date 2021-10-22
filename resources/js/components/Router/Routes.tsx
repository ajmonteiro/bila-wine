import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Login from '../Login/Login'

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Route exact path='/' component={Login} />
                <Switch>
                </Switch>
            </BrowserRouter>
        </>
    )
}