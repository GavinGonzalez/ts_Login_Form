import React, {useState, useContext, useEffect} from "react";
import {LoginContext} from "./LoginContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";
import {Buffer} from 'buffer';
import decodePayload from "./util/JWT";



const Login: React.FC = () => {

    const {email, username, changeUsername, changeEmail, pwd, changePwd, loggedIn, changeLogged} =  useContext(LoginContext)
    const [cookies, setCookies] = useCookies();


    const navigate = useNavigate() 

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        
    }

    
 

    const searchDataBase = (email:string, password:string, username:string) => {
       
        fetch("http://localhost:3001/signup",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email,  password}),
            credentials: "include"
        }).then(data => {
            navigate("/profile")
        }).catch(err => {
            console.log(err)
        })

            //navigate("/profile")
                
    }
       
        //console.log(decodePayload(cookies.jwt).data)
            
    
    return( 
    <>
        <form onSubmit={handleSubmit}>
            <h1>Sign up </h1> 
            <input required placeholder="username" value={username} onChange={data => changeUsername(data.target.value)}/>
            <input required placeholder="email" value={email} onChange={data => changeEmail(data.target.value)}/>
            <input required placeholder="password" value={pwd} onChange={data => changePwd(data.target.value)}/>
            <button type="submit" onClick={() => searchDataBase(email, pwd, username)}>submit</button>
        </form>
    </>

    );
}

export default Login;