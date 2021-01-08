export default (state = {
    users: [],
    loading: false
}, action) => {
    switch (action.type) {
        case "LOADING_USERS":
            return {
                ...state,
                loading: true
            }
        case "ADD_USERS":
            return {
                ...state,
                users: action.users,
                loading: false
            }
        case "ADD_NEW_RECIPE":
            const newRecipeUser = action.recipe.included.find(data => data.type === 'user')
            if (!state.users.data.find(user => user.id === newRecipeUser.id)) {
                const usersWithNew = [
                    ...state.users.data,
                    newRecipeUser
                ]
                return {
                    ...state,
                    users: {
                        ...state.users,
                        data: usersWithNew,
                        included: [...state.users.included, action.recipe.data]
                    },
                    loading: false
                }
            }
            else {
                return {
                    ...state,
                    users: {
                        ...state.users,
                        included: [...state.users.included, action.recipe.data]
                    },
                    loading: false
                }
            }
        case "DELETE_RECIPE":
            const deletedRecipe = state.users.included.filter(recipe => recipe.id === action.recipe.id ? false : true)
            return {
                ...state,
                users: {
                    ...state.users,
                    included: deletedRecipe
                },
                loading: false
            }
        default:
            return state;
    }
}