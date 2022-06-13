import React, {useContext} from "react";
import {LoginContext} from "./LoginContext";


const Profile: React.FC = () => {
    const {email, changeEmail, pwd, changePwd, loggedIn} =  useContext(LoginContext)
    console.log(email)
    return (
        <>
        <h1>{pwd}</h1>
        </>
    );
}

export default Profile;