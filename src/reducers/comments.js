export default (state = {
    comments: [],
    loading: false
}, action) => {
    switch (action.type) {
        case "LOADING_COMMENTS":
            return {
                ...state,
                loading: true
            }
        case "ADD_COMMENTS":
            console.log(state)
            return {
                ...state,
                comments: action.comments,
                loading: false
            }
        case "ADDING_NEW_COMMENT":
            return {
                ...state,
                loading: true
            }
        case "ADD_NEW_COMMENT":
            
            const thisUser = action.comment.included.find(data => data.type === 'user')
            const thisRecipe = action.comment.included.find(data => data.type === 'recipe')
            
            if (!state.comments.included.filter(data => data.type === "user").find(user => user.id === thisUser.id)) {
                state.comments.included.push(thisUser)
            }

            if (!state.comments.included.find(recipe => recipe.id === thisRecipe.id)) {
                state.comments.included.push(thisRecipe)
            }
            
            state.comments.data.push(action.comment.data)
            return {
                ...state,
                loading: false
            }
          
        default:
            return state;
    }
}