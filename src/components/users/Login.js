import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/loginForm.js';
import { login } from '../../actions/currentUser.js';
import { Button } from '@material-ui/core';
import {textFieldUseStyles} from '../../material-ui/textFieldUseStyles.js'
import Input from '@material-ui/core/Input';

const Login = props => {
    const {loginForm, updateLoginForm, login, history} = props
    const classes = textFieldUseStyles()

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = () => {
        login(loginForm)
        history.push('/profile/')
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Input placeholder="Username" name="username" value={loginForm.username} onChange={handleChange} />
            <Input placeholder="Password" name="password" type="password" value={loginForm.password} onChange={handleChange} />
            <Button variant="contained" id='submit-login-button' onClick={() => handleSubmit()}>Log In</Button>
            {/* <input type="submit" visible="hidden"></input> */}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)