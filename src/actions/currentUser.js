import {DOMAIN_URL} from '../domain.js'
import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'

// sync
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

// clear current user from Redux store
export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}

// async
export const login = credentials => {
    // console.log("credentials are", credentials)
    return dispatch => {
      return fetch(`${DOMAIN_URL}/api/v1/login`, {
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
            dispatch(resetLoginForm())
          }
      })
      .catch(console.log)
    }
}

export const signup = credentials => {
  return dispatch => {
    const info = {
      user: credentials
    }
    return fetch(`${DOMAIN_URL}/api/v1/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    })
    .then(resp => resp.json())
    .then(user => {
        if (user.error) {
          console.log(user.error)
        }
        else {
          dispatch(login(credentials))
          dispatch(resetSignupForm())
        }
    })
    .catch(console.log)
  }
}

// get the logged in user
export const getCurrentUser = () => {
    // console.log('checking for current user...')
    return dispatch => {
      return fetch(`${DOMAIN_URL}/api/v1/get_current_user`, {
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
    return fetch(`${DOMAIN_URL}/api/v1/logout`, {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}
