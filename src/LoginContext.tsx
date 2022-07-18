import React, {useContext, useEffect, useLayoutEffect, createContext, useState} from "react";
import {useCookies} from "react-cookie";
import decodePayload from "./util/JWT"
import { useLocation } from "react-router-dom";

interface userData {
    email: string,
    pwd: string,
    username: string,
    changeUsername: (email:string) => void,
    changeEmail: (email:string) => void,
    changePwd: (pwd:string) => void,
    loggedIn: boolean,
    changeLogged: (a: boolean) => void
}

let defaultState: userData = {
    email: "",
    pwd: "",
    username: "",
    changeUsername: (a: string) => console.log(a),
    changeEmail: (a: string) => console.log(a),
    changePwd: (a: string) => console.log(a),
    loggedIn: false,
    changeLogged: (a: boolean) => console.log(a)
}

export let LoginContext = createContext<userData>(defaultState)

type Props = {
    children: React.ReactNode
 }

export const LoginProvider: React.FC<Props> = ({children}) => {
    
    const [cookies, setCookies] = useCookies();

    const [email, changeEmail] = useState<string>("");
    const [pwd, changePwd] = useState<string>("");
    const [loggedIn, changeLogged] = useState<boolean>(false)
    const [username, changeUsername] = useState<string>("")

    
    useEffect(() => {
        let data;

        if(cookies.token) {
            let data = decodePayload(cookies.token)
            data = data.payload
            changeEmail(data.email)
            changeUsername(data.username)
            changeLogged(data.loggedIn)
            console.log("jjjj: "+loggedIn)
        }
    
    }, [])
  


    return(
        <LoginContext.Provider value={{
            email,
            pwd,
            username,
            changeEmail,
            changePwd,
            changeUsername,
            loggedIn,
            changeLogged,
            
            }}>
            {children}
        </LoginContext.Provider>

        
    );
}