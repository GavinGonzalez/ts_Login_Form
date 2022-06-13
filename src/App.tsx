import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import RestrictedRoute from "./RestrictedRoute";
import {LoginProvider} from "./LoginContext";
import Profile from "./Profile"
const App: React.FC = () => {
    return(
        <>
        <LoginProvider>
            <Router>
                <Routes>
                    <Route element={<RestrictedRoute/>}>
                        <Route path="/" element={<Login/>}/>
                    </Route>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>

            </Router>
        </LoginProvider>
        </>
    );
}

export default App;