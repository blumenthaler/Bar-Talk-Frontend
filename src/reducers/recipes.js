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
        default:
            return state;
    }
}