import React, {useContext} from "react";
import {LoginContext} from "./LoginContext";


const Profile: React.FC = () => {
    const {email, changeEmail, pwd, changePwd, loggedIn} =  useContext(LoginContext)
    console.log("logged: " + loggedIn)
    return (
        <>
        <h1>This is the home page</h1>
        <h1>:{JSON.stringify(loggedIn)}</h1>
        </>
    );
}

export default Profile;