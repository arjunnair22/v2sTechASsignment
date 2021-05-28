import {Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import Login from "../features/Login/Login";
import EmployeeList from "../features/EmployeeList/EmployeeList";
import Employee from "../features/EmployeeDetail/Employee";
import React from "react";
import withLoggedInUser from "../HOC/withLoggedInUser";
import {UserBar} from "./UserBar";

const routes = {
    login:{path: '/', component: Login},
    employees:{path: '/employees', component: withLoggedInUser(EmployeeList)},
    employee:{path: '/employee/:id', component: withLoggedInUser(Employee)}
}


function AppNavBar(){
    return (
        <>
            <Navbar bg="light" expand="lg" className={'justify-content-between'}>

                <Navbar.Brand href="/employees">Home</Navbar.Brand>
                <UserBar/>

            </Navbar>
            <Router>
                <Switch>
                    {
                        Object.values(routes).map(route=>
                            <Route exact path={route.path} key ={route.path}>
                                <route.component/>
                            </Route>
                        )
                    }
                </Switch>
            </Router>
        </>
    )
}


export default AppNavBar
