const initialState = {
    username: "",
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        default:
            return state;
    }
}