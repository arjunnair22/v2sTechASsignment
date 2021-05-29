import {Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import Login from "../features/Login/Login";
import EmployeeList from "../features/EmployeeList/EmployeeList";
import Employee from "../features/EmployeeDetail/Employee";
import React from "react";
import withLoggedInUser from "../HOC/withLoggedInUser";
import {UserBar} from "./UserBar";
import PrivateRoute from "../SharedComponents/PrivateRoute";


const routes = {
    login:{path: '/', component: Login, route:Route},
    employees:{path: '/employees', component: withLoggedInUser(EmployeeList), route: PrivateRoute},
    employee:{path: '/employee/:id', component: withLoggedInUser(Employee), route:PrivateRoute}
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
                        Object.values(routes).map(route=> {

                                return <route.route exact path={route.path} key={route.path}>
                                    <route.component/>
                                </route.route>
                            }
                        )
                    }
                </Switch>
            </Router>
        </>
    )
}


export default AppNavBar
