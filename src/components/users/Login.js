import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/loginForm.js';
import { login } from '../../actions/currentUser.js';



const Login = props => {

    const {loginForm, updateLoginForm, login, history} = props

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" type="text" name="username" onChange={handleChange} value={loginForm.username}></input>
            <input placeholder="Password" type="password" name="password" onChange={handleChange} value={loginForm.password}></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}



export default connect(mapStateToProps, { updateLoginForm, login })(Login)