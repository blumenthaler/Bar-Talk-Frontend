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
        case "ADD_NEW_RECIPE":
            return {
                ...state,
                recipes: {
                    ...state.recipes,
                    data: [
                        ...state.recipes.data,
                        action.recipe.data
                    ]
                },
                loading: false
            }
            case "EDITING_RECIPE":
                return {
                    ...state,
                    loading: true
                }
            case "EDIT_RECIPE":
                const index = state.recipes.data.findIndex(data => ((data.type === 'recipe') && (data.id === action.recipe.data.id)))
                const replaced = Object.assign([], state.recipes.data, {[index]: action.recipe.data})
                return {
                    ...state,
                    recipes: {
                        ...state.recipes,
                        data: replaced
                    },
                    loading: false
                }
            case "DELETING_RECIPE":
                return {
                    ...state,
                    loading: true
                }
            case "DELETE_RECIPE":
                const deleted = state.recipes.data.filter(recipe => recipe.id === action.recipe.id ? false : true)
                return {
                    ...state,
                    recipes: {
                        ...state.recipes,
                        data: deleted
                    },
                    loading: false
                }
            case "ADD_NEW_COMMENT":
                const commentForRecipe = {id: action.comment.data.id, type: "comment"}
                const foundRecipe = state.recipes.data.find(recipe => recipe.id === action.comment.data.relationships.recipe.data.id)
                const recipeCommentData = [...foundRecipe.relationships.comments.data, commentForRecipe]
                const commentsWithNew = [
                    ...state.recipes.included,
                    action.comment.data
                ]
                const newRecipe = {
                    ...foundRecipe,
                    relationships: {
                         ...foundRecipe.relationships,
                         comments: {
                             ...foundRecipe.relationships.comments,
                             data: recipeCommentData
                         }
                    }
                }
                Object.assign(state.recipes.data[state.recipes.data.findIndex(recipe => recipe.id === newRecipe.id)], newRecipe)
                return {
                    ...state,
                    recipes: {
                        ...state.recipes,
                        included: commentsWithNew
                    },
                    loading: false
                }
        default:
            return state;
    }
}