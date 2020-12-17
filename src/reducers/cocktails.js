export default (state = [], action) => {
    switch (action.type) {
        case "GET_ALL_COCKTAILS":
            return action.cocktails
        default:
            return state;
    }
}