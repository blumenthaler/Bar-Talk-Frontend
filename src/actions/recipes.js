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
            console.log(recipes)
          }
      })
      .catch(console.log)
    }
}