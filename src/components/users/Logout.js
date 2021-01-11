import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser.js';

const Logout = props => {
   
    const handleSubmit = event => {
        event.preventDefault()
        props.logout()
        props.history.push('/')
    }

        return (
            <form onSubmit={event => handleSubmit(event)}>
                <input type="submit" value="Log Out"></input>
            </form>
        )
    
}

export default connect(null, { logout })(Logout)