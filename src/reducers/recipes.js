// now I am only really using cocktails fetch; not this

export default (state = {
    recipes: [],
    loading: false
}, action) => {
    switch (action.type) {
        case "LOADING_RECIPES":
            return {
                ...state,
                loading: true
            }
        case "ADD_RECIPES":
            return {
                ...state,
                recipes: action.recipes,
                loading: false
            }
         // I really don't know if I want to keep this here
        // I think I need to move it to reducers/recipes
        // and then when rendering recipes, access THIS state (state.recipes)
        case "ADDING_NEW_RECIPE":
            return {
                ...state,
                loading: true
            }
        case "ADD_NEW_RECIPE":
            // console.log(state.recipes)
            // console.log(action.recipe)

            const thisUser = action.recipe.included.find(data => data.type === 'user')
            const thisCocktail = action.recipe.included.find(data => data.type === 'cocktail')

            // these mutate state!
            if (!state.recipes.included.filter(data => data.type === "user").find(user => user.id === thisUser.id)) {
                state.recipes.included.push(thisUser)
            }


       

            return {
                ...state,
                recipes: {
                    ...state.recipes,
                    data: [
                        ...state.recipes.data,
                        action.recipe.data
                    ]
                },
                loading: false
            }

            case "EDITING_RECIPE":
                return {
                    ...state,
                    loading: true
                }
            case "EDIT_RECIPE":
                const index = state.cocktails.included.findIndex(data => ((data.type === 'recipe') && (data.id === action.recipe.data.id)))

                state.cocktails.included.splice(index, 1, action.recipe.data)
                return {
                    ...state,
                    loading:false
                }
            case "DELETING_RECIPE":
                return {
                    ...state,
                    loading: true
                }
            case "DELETE_RECIPE":
                return state
        default:
            return state;
    }
}