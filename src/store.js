import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import users from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import signupForm from './reducers/signupForm.js';
import recipes from './reducers/recipes.js';
import cocktails from './reducers/cocktails.js';
import comments from './reducers/comments.js';
import thunk from 'redux-thunk';
// import loginUserReducer from './reducers/loginUser.js';

const reducer = combineReducers({
    users,
    currentUser,
    loginForm,
    signupForm,
    recipes,
    cocktails,
    comments
    // loginUser: loginUserReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store