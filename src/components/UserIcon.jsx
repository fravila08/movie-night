import { useNavigate, useOutletContext } from "react-router-dom";

const UserIcon = ({user}) => {
    const {userIcon, userName} = user
    const {setSelectedUser} = useOutletContext()
    const navigate = useNavigate()

    const handleClick = () => {
        setSelectedUser(user)
        navigate("/films/")
    }

    return (

        <div style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent:"center",
                alignItems:"center"
            }}
            onClick={handleClick}
            >
            <img 
                src={userIcon} 
                style={{width:"25vmin", height:"25vmin"}}
            />
            <h3>{userName}</h3>
        </div>
    )

}

export default UserIcon;