import {DOMAIN_URL} from '../domain.js'

// sync
export const getComments = comments => {
    return {
        type: "ADD_COMMENTS",
        comments
    }
}


//async
// get all comments
export const getAllComments = () => {
    return dispatch => {
      dispatch({type: "LOADING_COMMENTS"})
      return fetch(`${DOMAIN_URL}/api/v1/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(comments => {
          if (comments.error) {
            console.log(comments.error)
          }
          else {
            dispatch(getComments(comments))
          }
      })
      .catch(console.log)
    }
}