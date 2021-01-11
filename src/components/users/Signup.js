import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../../actions/signupForm.js';
import { signup } from '../../actions/currentUser.js';
import { Button } from '@material-ui/core';
import {textFieldUseStyles} from '../../material-ui/textFieldUseStyles.js'
import TextField from '@material-ui/core/TextField';


const Signup = ({signupForm, updateSignupForm, signup, history}) => {

    const classes = textFieldUseStyles()

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupForm,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = () => {
        signup(signupForm)
        history.push('/profile/')
    }
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="submit-username" label="Username" name="username" value={signupForm.username} onChange={handleChange} />

            <TextField id="signup-password" label="Password" name="password" type="password" value={signupForm.password} onChange={handleChange} />

            <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Sign Up</Button>
            {/* <input type="submit" value="Sign Up"></input> */}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    }
}



export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)