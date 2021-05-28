import React from 'react';
import TableRow from "../../SharedComponents/TableRow";
import {Table} from "react-bootstrap";
import withClickableRow from "../../HOC/withClickableRow";

const ClickableTableRow = withClickableRow(TableRow);

export default function EmployeeTable({employees, onClick}){

    function employeeRow(employee) {
        const {id, employee_name, ...rest} = employee
        return < ClickableTableRow
            path={`/employee/${employee.id}`}
            onClick={onClick}
            key={employee.id}
            data={{id, employee_name}}
            details = {rest}
        />
    }


    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {
                employees.map(employee=> {
                        return employeeRow(employee);
                    }
                )
            }
            </tbody>
        </Table>
    )
}