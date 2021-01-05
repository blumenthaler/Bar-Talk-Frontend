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
        case "ADDING_NEW_RECIPE":
            return {
                ...state,
                loading: true
            }
        case "ADD_NEW_RECIPE":
            const thisUser = action.recipe.included.find(data => data.type === 'user')
            const thisCocktail = action.recipe.included.find(data => data.type === 'cocktail')

            if (!state.cocktails.included.filter(data => data.type === "user").find(user => user.id === thisUser.id)) {
                state.cocktails.included.push(thisUser)
            }

            if (!state.cocktails.data.find(cocktail => cocktail.id === thisCocktail.id)) {
                state.cocktails.data.push(thisCocktail)
            }
            
            state.cocktails.included.push(action.recipe.data)
            return state
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
        default:
            return state;
    }
}