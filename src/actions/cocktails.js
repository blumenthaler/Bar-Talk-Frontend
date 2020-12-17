import {DOMAIN_URL} from '../domain.js'

// sync
export const getCocktails = cocktails => {
    return {
        type: "GET_ALL_RECIPES",
        cocktails
    }
}


//async
// get all cocktails
export const getAllCocktails = () => {
    return dispatch => {
      return fetch(`${DOMAIN_URL}/api/v1/cocktails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(cocktails => {
          if (cocktails.error) {
            console.log(cocktails.error)
          }
          else {
            dispatch(getCocktails(cocktails))
          }
      })
      .catch(console.log)
    }
}