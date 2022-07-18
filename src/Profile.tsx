import React, {useContext, useEffect, useLayoutEffect} from "react";
import {LoginContext} from "./LoginContext";
import {useCookies} from "react-cookie";
import decodePayload from "./util/JWT";
import { useLocation } from "react-router-dom";

const Profile: React.FC = () => {
    const {email, changeLogged, changeUsername, changeEmail, pwd, changePwd, loggedIn,username} =  useContext(LoginContext)
    //console.log(email)
    const [cookies, setCookies] = useCookies();
    console.log("datja: ",loggedIn)

    const location = useLocation();

    useLayoutEffect(() => {
        let data;

        if(cookies.token) {
            let data = decodePayload(cookies.token)
            data = data.payload
            changeEmail(data.email)
            changeUsername(data.username)
            changeLogged(data.loggedIn)
            console.log("jjjj: "+loggedIn)
        }
    
    }, [location])
    
    return (
        <>
        <h1>This is the profile page</h1>
        <h1>{username}</h1>
        </>
    );
}

export default Profile;