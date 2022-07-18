import React, {useState, useContext, useEffect} from "react";
import {LoginContext} from "./LoginContext";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";



const Login: React.FC = () => {

    const {email, changeEmail, pwd, changePwd, loggedIn, changeLogged} =  useContext(LoginContext)
    const [cookies, setCookies] = useCookies();


    const navigate = useNavigate() 

   
    
    

    

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        
    }

    
 

    const searchDataBase = (email:string, password:string) => {
       
        fetch("http://localhost:3001/login",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,  password}),
            credentials: "include"
        }).then(data => {
            navigate("/profile")
        }).catch(err => {
            console.log(err)
        })


        
        
        //console.log(decodePayload(cookies.token).data)
        }
        
        
        
             
        
        

    
   
    //console.log("logged: ", cookies.jwt)
    
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