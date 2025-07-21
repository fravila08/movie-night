import {  useState } from "react"
import UserIcon from "../components/UserIcon"
import { useLoaderData } from "react-router-dom"

const UserPage = () => {
    const [users, setUsers] = useState(useLoaderData())

    return (
        <div id="user-page">
            {users.map((user, idx)=>(
                <UserIcon user = {user} key={idx}/>
            ))}
        </div>
    )
}

export default UserPage