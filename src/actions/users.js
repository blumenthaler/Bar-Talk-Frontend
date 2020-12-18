import {DOMAIN_URL} from '../domain.js'

// sync
export const getUsers = users => {
    return {
        type: "ADD_USERS",
        users
    }
}



//async
// get all users
export const getAllRecipes = () => {
    return dispatch => {
      dispatch({type: "LOADING_USERS"})
      return fetch(`${DOMAIN_URL}/api/v1/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(users => {
          if (users.error) {
            console.log(users.error)
          }
          else {
            dispatch(getUsers(users))
          }
      })
      .catch(console.log)
    }
}