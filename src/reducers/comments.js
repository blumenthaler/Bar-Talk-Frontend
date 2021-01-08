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
            return {
                ...state,
                comments: {
                    ...state.comments,
                    data: commentsWithNew
                },
                loading: false
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
         
        default:
            return state;
    }
}