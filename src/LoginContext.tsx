import React, {useContext, createContext, useState} from "react";




interface userData {
    email: string,
    pwd: string,
    changeEmail: (email:string) => void,
    changePwd: (pwd:string) => void,
    loggedIn: boolean 
}

let defaultState: userData = {
    email: "",
    pwd: "",
    changeEmail: (a: string) => console.log(a),
    changePwd: (a: string) => console.log(a),
    loggedIn: false
}

export let LoginContext = createContext<userData>(defaultState)

type Props = {
    children: React.ReactNode
 }

export const LoginProvider: React.FC<Props> = ({children}) => {
    
    const [email, changeEmail] = useState<string>("");
    const [pwd, changePwd] = useState<string>("");

   
    return(
        <LoginContext.Provider value={{
            email,
            pwd,
            changeEmail,
            changePwd,
            loggedIn: false
            }}>
            {children}
        </LoginContext.Provider>

        
    );
}