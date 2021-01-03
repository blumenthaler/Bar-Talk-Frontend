import {DOMAIN_URL} from '../domain.js'
import { getAllCocktails } from './cocktails.js'

// sync
export const getRecipes = recipes => {
    return {
        type: "ADD_RECIPES",
        recipes
    }
}

export const addNewRecipe = recipe => {
  return {
    type: "ADD_NEW_RECIPE",
    recipe
  }
}

//async
// get all recipes
// currently unused
export const getAllRecipes = () => {
    return dispatch => {
      dispatch({type: "LOADING_RECIPES"})
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

// Add new Recipe to the database
// Keep here or move to cocktails? (corresponding reducer is cocktails reducer)
export const addRecipe = (recipe, user, history) => {
  const {name, spirit, ingredients, garnish, notes} = recipe
  const user_id = user.id

  const data = {
    recipe: {
      name: name,
      spirit: spirit,
      ingredients: ingredients,
      garnish: garnish,
      notes: notes,
      user_id: user_id
    }
  }

  return dispatch => {
    dispatch({type: "ADDING_NEW_RECIPE"})
    return fetch(`${DOMAIN_URL}/api/v1/recipes`, {
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
            // added history push after login/signup
            // Recipe does not show when being added..
            // even with history.push
            // from AllCocktails, a new cocktail is added... even with the same name & spirit; BUT it is displayed, unlike the other versions of the form
            // please debug!
            dispatch(addNewRecipe(obj))
            dispatch(getAllCocktails())
            history.push('/')
          }
      })
      .catch(console.log)
  }
}
