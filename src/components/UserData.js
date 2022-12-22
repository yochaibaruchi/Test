import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
const UserData = (props) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}`)
            setUser(data)
        }
        getUser()
    }, [props.id])


    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">userName: {user.username}</Card.Subtitle>
            <Card.Text>
                phone :{user.phone}
            </Card.Text>

        </Card.Body>
    </Card>
}


export default UserData;