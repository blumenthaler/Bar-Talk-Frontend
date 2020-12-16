// sync
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}





// async
export const login = credentials => {
    // credentials => username: "Mike Q", password: "pw"
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "Mike Q", password: "pw"})
        })
    }
}