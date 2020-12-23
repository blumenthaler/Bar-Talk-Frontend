import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users.js';
import Users from '../users/Users.js';


class UsersContainer extends React.Component {

    render() {
        if ((this.props.users.loading) || (!this.props.users)) {
            return (<h2>Loading...</h2>)
        }
        else {
            // console.log(this.props)

        // sorts users, current user listed first
        const sorted = this.props.users.reduce((acc, user) => {
            if (user.username === this.props.currentUser.username) {
                return [user, ...acc];
            }
            return [...acc, user]
        }, [])

            return (
                <Users 
                    users={sorted} 
                    cocktail={this.props.cocktail}
                    currentUser={this.props.currentUser}
                />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.cocktails.cocktails.included.filter(data => data.type === "user"),
    }
}

export default connect(mapStateToProps, {getAllUsers})(UsersContainer)
