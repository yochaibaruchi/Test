import { useEffect, useState } from "react";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UserTodos from "./UserTodos";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserData from "./UserData";
import { useNavigate } from 'react-router-dom'
function UsersComponent() {
    const [users, SetUsers] = useState([])
    const [userId, setUserId] = useState()
    const [flag, setFlag] = useState(false)
    const [selectedId, setSelectedId] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const getUsers = async () => {
            let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            SetUsers(data)
        }
        getUsers()
    }, [])
    return (
        <div>

            <Button onClick={() => navigate('/Posts')}> comments</Button>
            <Container>
                <Row>
                    <Col>  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>User Name </th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td className="user" onClick={() => setSelectedId(user.id)} >{user.name}</td>
                                        <td><Button onClick={() => {
                                            setFlag(!flag)
                                            setUserId(user.id)
                                        }} variant="light">Read more</Button>{' '}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                        <UserTodos id={selectedId} /></Col>
                    <Col>{flag && <UserData id={userId} />}</Col>
                </Row>
            </Container>

        </div>
    );
}

export default UsersComponent;