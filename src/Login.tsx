import React, {useState, useContext, useEffect} from "react";
import {LoginContext} from "./LoginContext";
import {useNavigate} from "react-router-dom";

import axios from 


const Login: React.FC = () => {

    const {email, changeEmail, pwd, changePwd, loggedIn, changeLogged} =  useContext(LoginContext)
   
    const navigate = useNavigate() 

   
    
    

    

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        navigate("/profile")
    }
 

    const searchDataBase = (email:string, password:string) => {
       
            if(email == "o" && password == "o") {
               


                
            }
    
    }
   
    console.log("logged: ", pwd)

    return( 
    <>
        <form onSubmit={handleSubmit}>
            <input required value={email} onChange={data => changeEmail(data.target.value)}/>
            <input required value={pwd} onChange={data => changePwd(data.target.value)}/>
            <button type="submit" onClick={() => searchDataBase(email, pwd)}>submit</button>
        </form>
    </>

    );
}

export default Login;