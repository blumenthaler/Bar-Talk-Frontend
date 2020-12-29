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
        case "ADDING_NEW_RECIPE":
            return {
                ...state,
                loading: true
            }
        case "CREATE_NEW_RECIPE":
            return state
        default:
            return state;
    }
}