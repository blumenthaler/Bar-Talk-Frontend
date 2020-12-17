// sync
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

// clear current user from Redux store
export const clearCurrentUser = user => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}





// async
export const login = credentials => {
    // console.log("credentials are", credentials)
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      .then(resp => resp.json())
      .then(user => {
          if (user.error) {
            console.log(user.error)
          }
          else {
            dispatch(setCurrentUser(user))
          }
      })
      .catch(console.log)
    }
}

// get the logged in user
export const getCurrentUser = () => {
    // console.log('checking for current user...')
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(user => {
          if (user.error) {
            console.log(user.error)
          }
          else {
            dispatch(setCurrentUser(user))
          }
      })
      .catch(console.log)
    }
}

// logging out / clear sessions
export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}
