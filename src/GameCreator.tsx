import React, {useContext, useEffect} from "react";
import {LoginContext} from "./LoginContext";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

const GameCreator: React.FC = () => {
    const {email, changeEmail, pwd, changePwd, loggedIn} =  useContext(LoginContext)
    const [cookies, setCookies] = useCookies();
    console.log("logged: " + loggedIn)

    let lat = 0;
    let lng = 0;

    
    if(cookies.location) {
        lat = cookies.location.lat
        lng = cookies.location.lng
    }


    

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBgJeECkzdFN0uydJdK0thedp3i5il4NDM"
    });

    function Map() {
        

        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                

                fetch("http://localhost:3001/location",
                {
                    method: "POST",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({lat: pos.coords.latitude, lng: pos.coords.longitude}),
                    credentials: "include"
                }).then(data => {
                    
                
                }).catch(err => {
                console.log(err)
                })

                console.log(cookies)
                
                
                
        })

        

    }
    console.log("lat: ", lat)
    console.log("long: ", lng)
    console.log("map started")
        return (
        <GoogleMap 
        zoom={70}
        center={{lat, lng}}
        mapContainerClassName="map-container"
        >
            <Marker position={{lat, lng}}/>
        </GoogleMap>
        )

       
    }

    

    return (
        <>
        <h1>This is the game page</h1>
        {isLoaded?<Map/>:<div>Loading...</div>}
        
       
        
        <button type="submit" onClick={() => {
            if("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(pos) {
                    

                    fetch("http://localhost:3001/location",
                    {
                        method: "POST",
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({lat: pos.coords.latitude, lng: pos.coords.longitude}),
                        credentials: "include"
                    }).then(data => {
                    
                    
                    }).catch(err => {
                    console.log(err)
                    })

                    console.log("recieved cookie: " + cookies.location.lat)
                    lat = cookies.location.lat
                    lng = cookies.location.lng

                    
                    
            })

            console.log("lat: ", lat)
            console.log("long: ", lng)

        }
        }}>press</button>
        </>
    );
}

export default GameCreator;