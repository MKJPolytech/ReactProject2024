import React from "react";
import {GuestGreeting, UserGreeting} from "./UserGuestGreeting";


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/>
    }
}

export default Greeting