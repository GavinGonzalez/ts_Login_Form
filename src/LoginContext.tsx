import React, {useContext, createContext, useState} from "react";




interface userData {
    email: string,
    pwd: string,
    changeEmail: (email:string) => void,
    changePwd: (pwd:string) => void,
    loggedIn: boolean,
    changeLogged: (a: boolean) => void
}

let defaultState: userData = {
    email: "",
    pwd: "",
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
    
    const [email, changeEmail] = useState<string>("");
    const [pwd, changePwd] = useState<string>("");
    const [loggedIn, changeLogged] = useState<boolean>(false)
   
    return(
        <LoginContext.Provider value={{
            email,
            pwd,
            changeEmail,
            changePwd,
            loggedIn,
            changeLogged
            }}>
            {children}
        </LoginContext.Provider>

        
    );
}