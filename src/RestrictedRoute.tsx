import React, {useContext, useEffect} from "react";
import {Outlet, Navigate} from "react-router-dom";
import {LoginContext} from "./LoginContext"

const RestrictedRoute: React.FC = () => {
    const {loggedIn, changeLogged} = useContext(LoginContext);

    useEffect(() => {
        console.log(localStorage.getItem("log"))
        changeLogged(false)
        
        
    }
)


    return false?<Outlet/>:<Navigate to="/"/>
}


export default RestrictedRoute