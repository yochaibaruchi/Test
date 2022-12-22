import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
const Comments = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
            setComments(data)
        }
        getComments()
    }, [id])

    return (
        <div>

            <Button onClick={() => navigate(-1)}>back</Button> <br />

            <ul>
                {comments.map(com => {
                    return <li key={com.id}>{com.body}</li>
                })}
            </ul>
        </div>
    )

}


export default Comments;