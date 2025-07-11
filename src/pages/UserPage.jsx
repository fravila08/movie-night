import { useState } from "react"
import UserIcon from "../components/UserIcon"

const UserPage = () => {
    const [users, setUsers] = useState([
        {userIcon:"#", userName:"New User", userToken:null}
    ])
    return (
        <div id="user-page">
            {users.map((user)=>(
                <UserIcon user = {user}/>
            ))}
        </div>
    )
}

export default UserPage