import React, {useContext, useEffect} from "react";
import {Outlet, Navigate, useLocation} from "react-router-dom";
import {LoginContext} from "./LoginContext"
import {useCookies} from "react-cookie";
import decode from "./util/JWT";

const AuthRestrictedRoute: React.FC = () => {




    const {loggedIn, changeLogged} = useContext(LoginContext);

    const [cookies, setCookies] = useCookies();
    let logged;
    let location = useLocation().pathname;
    

    if(cookies.token) {
        let log = decode(cookies.token)
        logged = log.payload.loggedIn
        
    }
    console.log("fdgs "+loggedIn)

    return loggedIn?<Navigate to="/profile"/>:<Outlet/>
    

}


export default AuthRestrictedRoute