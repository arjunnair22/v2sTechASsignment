import { configureStore } from '@reduxjs/toolkit'
import login from '../features/Login/loginSlice';
import employees from '../features/EmployeeList/EmployeeListSlice'
import employee from "../features/EmployeeDetail/employeeSlice";

export default configureStore({
    reducer:{
        login,
        employees,
        employee
    }
})