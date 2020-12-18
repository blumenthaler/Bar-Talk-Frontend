export default (state = {
    cocktails: [],
    loading: false
}, action) => {
    switch (action.type) {
        case "LOADING_COCKTAILS":
            return {
                ...state,
                cocktails: [...state.cocktails],
                loading: true
            }
        case "ADD_COCKTAILS":
            return {
                ...state,
                cocktails: action.cocktails,
                loading: false
            }
        // case "GET_ALL_COCKTAILS":
        //     return action.cocktails
        default:
            return state;
    }
}