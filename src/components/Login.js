import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { loginUser } from '../actions/loginUser.js';



const Login = ({loginForm, updateLoginForm}) => {
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
        console.log(event)
    }
    return (
        <form onSubmit={undefined}>
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



export default connect(mapStateToProps, { updateLoginForm, loginUser })(Login)