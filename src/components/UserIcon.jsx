const UserIcon = ({user}) => {
    const {userIcon, userName, userToken} = user
    return (

        <div style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent:"center",
                alignItems:"center"
            }}>
            <img 
                src={userIcon} 
                style={{width:"25vmin", height:"25vmin"}}
            />
            <h3>{userName}</h3>
        </div>
    )

}

export default UserIcon;