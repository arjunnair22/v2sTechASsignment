import {Card, Row, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {employeeModel} from "../../helpers/constants";

function fromEmployeeProperties(entry) {
    return employeeModel[entry];
}

export default function Employee(){
    const location = useLocation()
    const employee  = useSelector(state=> location.state.data || state['employee']);
    const {profile_image, ...details} = location.state.details || {}

    function getTbody() {
        return <tbody>
        {
            Object.entries({...employee, ...details}).map(entries => {
                return <tr key={entries[0]}>
                    <td>
                        {fromEmployeeProperties(entries[0])}
                    </td>
                    <td>
                        {entries[1]}
                    </td>
                </tr>
            })
        }
        </tbody>;
    }



    return(
        <Row className={'justify-content-center'}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={`${employee['profile_image']}`} alt={` ${employee['employee_name']} Profile Pic`} className={'rounded-circle'}/>
                <Card.Body>
                    <Card.Title>Employee Details</Card.Title>
                    <Table striped bordered hover>
                        {getTbody()}
                    </Table>
                </Card.Body>
            </Card>
        </Row>
    )
}