import React from "react";
import {Outlet, Navigate} from "react-router-dom"

const RestrictedRoute: React.FC = () => {
    const isLogged = true

    return isLogged?<Outlet/>:<Navigate to="/"/>
}


export default RestrictedRoute