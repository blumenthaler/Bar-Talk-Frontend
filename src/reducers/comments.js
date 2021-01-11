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
            const commentsWithNew = [
                    ...state.comments.data, 
                    action.comment.data
                ]
            let newIncluded = []
            const commentUsers = state.comments.included.filter(data => data.type === 'user')
            const newCommentUser = action.comment.included.find(data => data.type === 'user')
            if (!commentUsers.find(user => user.id === newCommentUser.id)) {
                newIncluded = [
                    ...state.comments.included,
                    newCommentUser
                ]
            }
            const commentRecipes = state.comments.included.filter(data => data.type === 'recipe')
            const newCommentRecipe = action.comment.included.find(data => data.type === 'recipe')
            if (!commentRecipes.find(recipe => recipe.id === newCommentRecipe.id)) {
                newIncluded = [
                    ...state.comments.included,
                    newCommentRecipe
                ]
            }
            if (newIncluded.length !== 0) {
                return {
                    ...state,
                    comments: {
                        ...state.comments,
                        data: commentsWithNew,
                        included: newIncluded
                    },
                    loading: false
                }
            }
            else {
                return {
                    ...state,
                    comments: {
                        ...state.comments,
                        data: commentsWithNew
                    },
                    loading: false
                }
            }

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
            const commentsRemaining = state.comments.data.filter(comment => comment.relationships.recipe.data.id !== action.recipe.id)
            return {
                ...state,
                comments: {
                    ...state.comments,
                    data: commentsRemaining
                },
                loading: false
            }
        default:
            return state;
    }
}