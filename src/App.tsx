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
                        <Route path="/profile" element={<Profile/>}/>
                
                    </Route>
                    <Route path="/" element={<Login/>}/>
                    <Route path="*" element={<h1>This route doesn't exist</h1>}/>
                </Routes>

            </Router>
        </LoginProvider>
        </>
    );
}

export default App;