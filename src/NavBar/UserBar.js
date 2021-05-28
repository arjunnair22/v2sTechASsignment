import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {logout} from "../features/Login/loginSlice";
import UserService from "../Services/UserService";
import React from "react";

export function UserBar() {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const dispatch = useDispatch();

    return (
        <div>
            {isLoggedIn ?
                <>
                    <Button className={'btn btn-secondary float-right'}
                            onClick={() => dispatch(logout())}> Logout </Button>
                    <div> Welcome - {UserService.getUserName()} </div>
                </> : null}
        </div>
    )
}