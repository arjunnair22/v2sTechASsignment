import React from 'react';
import {useHistory} from "react-router-dom";

export default function withClickableRow(Component){
    return function ComponentWithClickableRow (props){
        const history = useHistory();
        const routeTo =()=>{
            history.push(props.path, props)
        }
        return (

                <Component {...props} onClick={routeTo}/>

        )
    }
}