import React, {useState, useContext} from "react";
import {LoginContext} from "./LoginContext";
import {useNavigate} from "react-router-dom";




const Login: React.FC = () => {

    const {email, changeEmail, pwd, changePwd, loggedIn} =  useContext(LoginContext)
   
    const navigate = useNavigate() 

    //fdgdfg

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        navigate("/profile")
    }
 

    const searchDataBase = (email:string, password:string) => {
        const dataBase = [
            {userEmail: "g", userPwd: "y"},
            {userEmail: "blakeGay@gmail.com", userPwd: "66738"}
        ];

        dataBase.forEach((dbUser) => {
            if(email == dbUser.userEmail && password == dbUser.userPwd) {
                changeEmail("fjhed")
                console.log("user found")
            }
        })
    }
   
    console.log("logged: ", pwd)

    return( 
    <>
        <form onSubmit={handleSubmit}>
            <input  value={email} onChange={data => changeEmail(data.target.value)}/>
            <input  value={pwd} onChange={data => changePwd(data.target.value)}/>
            <button type="submit" onClick={() => searchDataBase(email, pwd)}>submit</button>
        </form>
    </>

    );
}

export default Login;