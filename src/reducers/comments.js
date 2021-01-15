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
            Object.assign(state.comments.data[state.comments.data.length - 1], action.comment.data)
            const commentUsers = state.comments.included.filter(data => data.type === 'user')
            const newCommentUser = action.comment.included.find(data => data.type === 'user')
            if (!commentUsers.find(user => user.id === newCommentUser.id)) {
                Object.assign(state.comments.included[state.comments.included.length - 1], newCommentUser)
            }
            const commentRecipes = state.comments.included.filter(data => data.type === 'recipe')
            const newCommentRecipe = action.comment.included.find(data => data.type === 'recipe')
            if (!commentRecipes.find(recipe => recipe.id === newCommentRecipe.id)) {
               Object.assign(state.comments.included[state.comments.included.length - 1], newCommentRecipe)
            }
            return state
        case "DELETING_COMMENT":
            return {
                ...state,
                loading: true
            }
        case "DELETE_COMMENT":
            const filteredComments = state.comments.data.filter(comment => comment.id !== action.comment.id)
            return {
                ...state,
                comments: {
                    ...state.comments,
                    data: filteredComments
                },
                loading: false
            }
        case "DELETE_RECIPE":
            if (!!state.comments.data) {
                const commentsRemaining = state.comments.data.filter(comment => comment.relationships.recipe.data.id !== action.recipe.id)
                return {
                    ...state,
                    comments: {
                        ...state.comments,
                        data: commentsRemaining
                    },
                    loading: false
                }
            }
            else {return  state}
            
        default:
            return state;
    }
}