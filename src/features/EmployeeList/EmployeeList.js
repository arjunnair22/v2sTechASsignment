import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchEmployees, search} from "./EmployeeListSlice";
import EmployeeTable from "./EmployeeTable";
import Loader from "../../SharedComponents/Loader";
import NoData from "../../SharedComponents/NoData";
import {Form} from "react-bootstrap";
import PropTypes from 'prop-types';
const componentMap = {
    loading:Loader,
    succeeded:EmployeeTable,
    failed:NoData,
    idle:Loader
}

function EmployeeList(){
    const {status, employees, filter} = useSelector(state=>state['employees'])
    const filterByEmployeeName= emp => emp['employee_name'].toUpperCase().includes(filter.toUpperCase())

    const filteredEmployees = employees.filter(filterByEmployeeName)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(search(''))
    },[])

    useEffect(()=>{
        if(status==='idle')  dispatch(fetchEmployees())
    },[status, dispatch])
    const Component = componentMap[status];
    return(
        <>
            <SearchBox dispatch={dispatch} />
            <Component employees={filteredEmployees} />
        </>

    )
}

EmployeeList.propTypes = {
    status: PropTypes.string,
    employees: PropTypes.array,
    filter: PropTypes.string
}

function SearchBox({dispatch}){
    return (
        <div className={'searchBox'}>
            <Form.Control type="text" placeholder="Search By Name ... "
                          onChange={(e)=>dispatch(search(e.target.value))}
            />
        </div>
    )
}

SearchBox.propTypes = {
    dispatch:PropTypes.func
}

export default EmployeeList;