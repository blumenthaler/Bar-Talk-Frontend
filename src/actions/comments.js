import {DOMAIN_URL} from '../domain.js'
import {getAllCocktails} from './cocktails.js'

// sync
export const getComments = comments => {
    return {
        type: "ADD_COMMENTS",
        comments
    }
}

export const addNewComment = comment => {
  return {
    type: "ADD_NEW_COMMENT",
    comment
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

export const addComment = comment => {
  const {content, recipe_id, user_id} = comment
  const data = {
    comment: {
      content,
      recipe_id,
      user_id
    }
  }
  return dispatch => {
    dispatch({type: "ADDING_NEW_COMMENT"})
    return fetch(`${DOMAIN_URL}/api/v1/comments`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(obj => {
          if (obj.error) {
            console.log(obj.error)
          }
          else {
            dispatch(addNewComment(obj))
            dispatch(getAllCocktails())
          }
      })
      .catch(console.log)
  }
}