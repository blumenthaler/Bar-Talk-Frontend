import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users.js';
import Users from '../users/Users.js';


class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getAllUsers()
    }

    render() {
        if ((this.props.users.loading) || (this.props.users.users.length === 0)) {
            return (<h2>Loading...</h2>)
        }
        else {
            return (
                // <Users />
                <Users 
                    users={this.props.users.users.filter(user => (this.props.recipes.map(recipe => recipe.relationships.user.data.id)).includes(user.id.toString()) )} 
                    cocktail={this.props.cocktail}
                    recipes={this.props.recipes}
                    currentUser={this.props.currentUser}
                />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {getAllUsers})(UsersContainer)
