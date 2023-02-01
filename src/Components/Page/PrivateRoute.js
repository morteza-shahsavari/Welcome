import React from 'react'
import{Outlet,Navigate} from "react-router-dom"
const PrivateRoute = (props) => {

    
    return (
        props.T.auth ? <Outlet/> :<Navigate to="/login"/>
    )
  
}

export default PrivateRoute