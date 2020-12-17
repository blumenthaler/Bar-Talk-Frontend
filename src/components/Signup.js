import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';



const Signup = ({signupForm, updateSignupForm, signup}) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupForm,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupForm)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" type="text" name="username" onChange={handleChange} value={signupForm.username}></input>
            <input placeholder="Password" type="password" name="password" onChange={handleChange} value={signupForm.password}></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    }
}



export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)