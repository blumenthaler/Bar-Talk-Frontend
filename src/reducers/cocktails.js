export default (state = {
    cocktails: [],
    loading: false
}, action) => {
    switch (action.type) {
        case "LOADING_COCKTAILS":
            return {
                ...state,
                loading: true
            }
        case "ADD_COCKTAILS":
            return {
                ...state,
                cocktails: action.cocktails,
                loading: false
            }
        case "ADD_NEW_RECIPE":
            const newRecipeCocktail = action.recipe.included.find(data => data.type === 'cocktail')

            if (!state.cocktails.data.find(cocktail => cocktail.id === newRecipeCocktail.id)) {
                Object.assign(state.cocktails.data[state.cocktails.data.findIndex(cocktail => cocktail.id === newRecipeCocktail.id)], newRecipeCocktail)
            }

            return {
                ...state,
                cocktails: {
                    ...state.cocktails,
                    included: [...state.cocktails.included, action.recipe.data]
                },
                loading: false
            }
        case "DELETE_RECIPE":
            const deletedRecipe = state.cocktails.included.filter(data => ((data.type === 'recipe') && (data.id === action.recipe.id)) ? false : true)

            const thisCocktail = state.cocktails.data.find(cocktail => cocktail.id === action.recipe.relationships.cocktail.data.id)
            
            const cocktailMaybeEmpty = thisCocktail.relationships.recipes.data.filter(recipeData => recipeData.id !== action.recipe.id)

            if (cocktailMaybeEmpty.length === 0) {
                const cocktailsRemoveEmpty = state.cocktails.data.filter(cocktail => cocktail.id !== thisCocktail.id)
                return {
                    ...state,
                    cocktails: {
                        ...state.cocktails,
                        included: deletedRecipe,
                        data: cocktailsRemoveEmpty
                    },
                    loading: false
                }
            }
            else {
                return {
                    ...state,
                    cocktails: {
                        ...state.cocktails,
                        included: deletedRecipe
                    },
                    loading: false
                }
            }
        default:
            return state;
    }
}