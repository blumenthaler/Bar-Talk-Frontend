import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser.js';

class Logout extends React.Component {
   
    handleSubmit = event => {
        event.preventDefault()
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="submit" value="Log Out"></input>
            </form>
        )
    }
}

export default connect(null, { logout })(Logout)