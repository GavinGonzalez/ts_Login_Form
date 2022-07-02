import React, {useContext, useEffect} from "react";
import {Outlet, Navigate} from "react-router-dom";
import {LoginContext} from "./LoginContext"
import {useCookies} from "react-cookie";
import decode from "./util/JWT";

const RestrictedRoute: React.FC = () => {
    const {loggedIn, email, changeLogged} = useContext(LoginContext);

    const [cookies, setCookies] = useCookies();
    let tokenData;

    if(cookies.token) {
        let log = decode(cookies.token)
        tokenData = log.payload
    }
    console.log("fgjnfdsi: ", JSON.stringify(email))
    return tokenData.loggedIn?<Outlet/>:<Navigate to="/"/>
    

}


export default RestrictedRoute