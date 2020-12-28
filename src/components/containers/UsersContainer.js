import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users.js';
import Users from '../users/Users.js';
import User from '../users/User.js';


class UsersContainer extends React.Component {

    render() {
        if ((this.props.users.loading) || (!this.props.users)) {
            return (<h2>Loading...</h2>)
        }
        else {
            // only pass recipes, users as props if they belong to this specific cocktail
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

            // sorts users, current user listed first
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
        users: state.cocktails.cocktails.included.filter(data => data.type === "user"),
        recipes: state.cocktails.cocktails.included.filter(data => data.type === "recipe")
    }
}

export default connect(mapStateToProps, {getAllUsers})(UsersContainer)
