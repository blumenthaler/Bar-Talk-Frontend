import {DOMAIN_URL} from '../domain.js'

// sync
export const getRecipes = recipes => {
    return {
        type: "ADD_RECIPES",
        recipes
    }
}



//async
// get all recipes
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
export const addRecipe = (recipe, user, cocktail) => {
  console.log(recipe)
  console.log(user)
  console.log(cocktail)
  const {name, spirit, ingredients, garnish, notes} = recipe
  const user_id = user.id
  const cocktail_id = cocktail.id

  const data = {
    recipe: {
      name: name,
      spirit: spirit,
      ingredients: ingredients,
      garnish: garnish,
      notes: notes,
      votes: 0,
      user_id: user_id,
      cocktail_id: cocktail_id
    }
  }
  console.log(data)

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
      .then(recipes => {
          if (recipes.error) {
            console.log(recipes.error)
          }
          else {
            console.log('success')
            // show the user's new recipe!
            // dispatch(getRecipes(recipes))
          }
      })
      .catch(console.log)
  }
}
