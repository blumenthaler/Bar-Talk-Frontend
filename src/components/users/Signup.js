import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../../actions/signupForm.js';
import { signup } from '../../actions/currentUser.js';
import { Button } from '@material-ui/core';
import {textFieldUseStyles} from '../../material-ui/textFieldUseStyles.js'
import Input from '@material-ui/core/Input';


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
            <Input placeholder="Username" name="username" value={signupForm.username} onChange={handleChange} />

            <Input placeholder="Password" name="password" type="password" value={signupForm.password} onChange={handleChange} />

            <Button variant="contained" id="submit-signup-button" onClick={() => handleSubmit()}>Sign Up</Button>
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