import React from "react"
import { useState, useEffect } from "react";
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard';

const Routes = () => {
    //para o usuario somente ter acesso ao dashboard se ele estiver autenticado
    //será criado um useState e um useEffect para verificar isso

    // const [authenticated, setAuthenticated] = useState(false)

    // useEffect(() => {        
    //     const token = JSON.parse(localStorage.getItem('@Doit:token'))        
    //     if (token) {
    //         return setAuthenticated(true)
    //     }
    // }, [authenticated])
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/signUp">
                <SignUp />
            </Route>
            <Route exact path="/login">
                <Login 
                />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}

export default Routes