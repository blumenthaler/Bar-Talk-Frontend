import {DOMAIN_URL} from '../domain.js'

// sync
export const getRecipes = recipes => {
    return {
        type: "GET_ALL_RECIPES",
        recipes
    }
}



//async
// get all recipes
export const getAllRecipes = () => {
    return dispatch => {
      return fetch(`${DOMAIN_URL}/api/v1/recipes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(recipes => {
          if (recipes.error) {
            console.log(recipes.error)
          }
          else {
            dispatch(getRecipes(recipes))
          }
      })
      .catch(console.log)
    }
}