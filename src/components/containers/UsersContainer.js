import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users.js';
import Users from '../users/Users.js';
import User from '../users/User.js';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getAllUsers()
    }

    render() {
        if ((this.props.loading) || (!this.props.users)) {
            return (<h2>Loading...</h2>)
        }
        else {
            const filteredRecipes = this.props.recipes.filter(recipe => recipe.relationships.cocktail.data.id === this.props.cocktail.id)
            
            if (this.props.profile) {
                return (
                    <User 
                    user={this.props.currentUser.data} 
                    cocktail={this.props.cocktail}
                    currentUser={this.props.currentUser}
                    recipes={filteredRecipes}
                    />
                )
            }
            else {

            const filteredUsers = this.props.users.filter(user => (filteredRecipes.map(recipe => recipe.relationships.user.data.id)).includes(user.id))
            
            const sorted = filteredUsers.reduce((acc, user) => {
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
                        recipes={filteredRecipes}
                    />
                )
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users.data,
        recipes: state.users.users.included,
        loading: state.users.loading
    }
}

export default connect(mapStateToProps, {getAllUsers})(UsersContainer)