import React, {useContext} from "react";
import {Outlet, Navigate} from "react-router-dom";
import {LoginContext} from "./LoginContext"

const RestrictedRoute: React.FC = () => {
    const {loggedIn} = useContext(LoginContext);

    return loggedIn?<Outlet/>:<Navigate to="/"/>
}


export default RestrictedRoute