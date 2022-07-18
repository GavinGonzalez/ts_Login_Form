import React, {useState, useEffect, useContext, useLayoutEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import ProfileRestrictedRoute from "./ProfileRestrictedRoute";
import AuthRestrictedRoute from "./AuthRestrictedRoute";
import {LoginProvider} from "./LoginContext";
import Profile from "./Profile";
import Signup from "./Signup";
import Home from "./Home";
import {LoginContext} from "./LoginContext";
import {useCookies} from "react-cookie";
import decodePayload from "./util/JWT"
import { useLocation } from "react-router-dom";
import GameCreator from "./GameCreator";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const App: React.FC = () => {

    const [cookies, setCookies] = useCookies();
    const {email, changeEmail, changeUsername, pwd, changePwd, loggedIn, changeLogged} =  useContext(LoginContext)

    

    return(
        
        <LoginProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route element={<ProfileRestrictedRoute/>}>
                        <Route path="/profile" element={<Profile/>}/>
                        
                    </Route>
                    <Route path="/creategame" element={<GameCreator/>}/>
                    <Route element={<AuthRestrictedRoute/>}>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                    <Route path="*" element={<h1>This route doesn't exist</h1>}/>
                </Routes>

            </Router>
        </LoginProvider>
        
    );
}

export default App;