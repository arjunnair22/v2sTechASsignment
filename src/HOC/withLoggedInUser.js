import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export default function withLoggedInUser(Component){
    return function (props){
        const isLoggedIn = useSelector(state=> state.login.isLoggedIn);
        const history = useHistory();
        useEffect(()=>{
            if(!isLoggedIn) history.push('/')
        },[isLoggedIn, history])
        return(
                <Component {...props}/>
        )

    }
}