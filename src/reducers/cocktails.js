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
            const cocktailsWithNew = [
                ...state.cocktails.data,
                action.recipe.included.find(data => data.type === 'cocktail')
            ]
            if (!state.cocktails.data.find(cocktail => cocktail.id === newRecipeCocktail.id)) {
                return {
                    ...state,
                    cocktails: {
                        ...state.cocktails,
                        data: cocktailsWithNew,
                        included: [...state.cocktails.included, action.recipe.data]
                    },
                    loading: false
                }
            }
            else {
                return {
                    ...state,
                    cocktails: {
                        ...state.cocktails,
                        included: [...state.cocktails.included, action.recipe.data]
                    },
                    loading: false
                }
            }
        case "DELETE_RECIPE":
            const deletedRecipe = state.cocktails.included.filter(data => ((data.type === 'recipe') && (data.id === action.recipe.id)) ? false : true)
            return {
                ...state,
                cocktails: {
                    ...state.cocktails,
                    included: deletedRecipe
                },
                loading: false
            }
        default:
            return state;
    }
}