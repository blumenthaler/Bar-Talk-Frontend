export function loginUser(user) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        fetch('http://localhost:3000/api/v1/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "Mike Q", password: "pw"})
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: "LOG_IN_USER", data}))
    }
}