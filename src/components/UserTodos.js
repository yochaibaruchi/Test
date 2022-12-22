import { useEffect, useState } from "react";
import axios from 'axios'
function UserTodos(props) {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getUserTodos = async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/?userId=${props.id}`)
            setTodos(data)
        }
        getUserTodos()
    }, [props.id])

    return (
        <ul>
            {todos.map((item) => {
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
    )


}

export default UserTodos;