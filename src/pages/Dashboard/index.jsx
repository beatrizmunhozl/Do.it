import React from "react"
import { Redirect } from "react-router-dom"

const Dashboard = ({authenticated}) => {
    if(!authenticated){<Redirect to ='/login'/>}
    
}

export default Dashboard