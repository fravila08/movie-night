export const checkIfUserNameExists = (userName) => {
    for (let keyIdx = 0; keyIdx < localStorage.length; keyIdx++){
        let storageKey = localStorage.key(keyIdx)
        if(/^user[0-3]$/.test(storageKey)){
            let userObj = JSON.parse(localStorage.getItem(storageKey))
            if( userObj.userName === userName){
                return true
            }
        }
    }
    return false;
}

export const createUser = (userName, counter) => {
    if (checkIfUserNameExists(userName)){
        throw "User Name already exists!"
    }
    else {
        const newUser = {
            'userName':userName,
            'favorites': [],
        };
        let userObjAsStr = JSON.stringify(newUser)
        localStorage.setItem(`user${counter}`, userObjAsStr)
        return newUser
    }
}

export const getExistingUsers = () => {
    let users = []
    if (!localStorage.length){
        return users;
    }
    else{
        for (let keyIdx = 0; keyIdx < localStorage.length; keyIdx++){
            let storageKey = localStorage.key(keyIdx)
            if(/^user[1-3]$/.test(storageKey)){
                let storageKey = localStorage.key(keyIdx)
                let userStringVal = localStorage.getItem(storageKey)
                let userObj = JSON.parse(userStringVal)
                users.push(userObj)
            }
        }
        return users;
    }
}