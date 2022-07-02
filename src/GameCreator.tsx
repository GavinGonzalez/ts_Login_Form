import React, {useContext} from "react";
import {LoginContext} from "./LoginContext";


const GameCreator: React.FC = () => {
    const {email, changeEmail, pwd, changePwd, loggedIn} =  useContext(LoginContext)
    console.log("logged: " + loggedIn)

    if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            console.log("lat: ", pos.coords.latitude)
            console.log("long: ", pos.coords.longitude)
        })
    }

    return (
        <>
        <h1>This is the game page</h1>
        
        </>
    );
}

export default GameCreator;