import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
const PostComponent = () => {
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getTodos = async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setTodos(data)
        }
        getTodos()
    }, [])



    return (
        <div>
            <Button onClick={() => navigate('/')}>users & todos</Button> <br />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>todos</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => {
                        return (
                            <tr key={todo.id}>
                                <td onClick={() => navigate(`/Comments/${todo.id}`)} className="user" >{todo.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )


}


export default PostComponent;