import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/loginForm.js';
import { login } from '../../actions/currentUser.js';
import { Button } from '@material-ui/core';
import {textFieldUseStyles} from '../../material-ui/textFieldUseStyles.js'
import TextField from '@material-ui/core/TextField';

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
            <TextField id="login-username" label="Username" name="username" value={loginForm.username} onChange={handleChange} />
            <TextField id="login-password" label="Password" name="password" type="password" value={loginForm.password} onChange={handleChange} />
            <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Log In</Button>
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