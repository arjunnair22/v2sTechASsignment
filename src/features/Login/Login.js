import React, {useEffect} from 'react';
import {Button, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {login , updateValue} from "./loginSlice";
import {createProperty} from "../../helpers/utils";
import './login.css';
import ValidationBlock from "../../SharedComponents/ValidationBlock";
import PropTypes from 'prop-types';

function Login(){
    const {personalId, password, isLoggedIn, validationMessage} = useSelector(s=>s.login);
    const dispatch = useDispatch();
    const history = useHistory();
    const dispatchLogin = (e)=>e.which === 13 ? dispatch(login()) :null;
    useEffect(()=>{
        // @Todo : use enum for routes
        if(isLoggedIn) {
            history.replace('/employees');
        }
    },[isLoggedIn, history, personalId])

    return (
        <Row className={'justify-content-center align-items-center custom-row'}>
        <Form>
            <Form.Text id="validationBlock" className={'text-danger'}>
                {validationMessage.map(msg=><ValidationBlock key={'msg'} msg={msg}/> )}
            </Form.Text>
            <Form.Group >
                <Form.Label>Email address/username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={personalId} onChange={(e)=>
                    dispatch(updateValue(
                        createProperty('personalId', e.target.value)
                    ))}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              onKeyDown={(e)=>dispatchLogin(e)}
                              placeholder="Password" onChange={(e)=>dispatch(updateValue(
                    createProperty('password', e.target.value)
                ))} value={password}/>
            </Form.Group>

            <Button variant="primary" type="button" onClick={()=>dispatch(login())}>
                Submit
            </Button>
        </Form>
        </Row>
    )
}

Login.propTypes = {
    personalId:PropTypes.string,
    password:PropTypes.string,
    isLoggedIn:PropTypes.bool,
    validationMessage:PropTypes.arrayOf(PropTypes.string)
}

export default Login;