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
        if ((this.props.users.loading) || (!this.props.users)) {
            return (<h2>Loading...</h2>)
        }
        else {

            // I dont know yet if this will change, or if it is actually necessary
            // compare userRecipe ids to cocktailRecipe ids
            // only need to render users that have recipes corresponding to each cocktail
            const filteredRecipes = this.props.recipes.filter(recipe => recipe.relationships.cocktail.data.id === this.props.cocktail.id)
            
            if (this.props.profile) {
                return (
                    <User 
                    user={this.props.currentUser.data} 
                    cocktail={this.props.cocktail}
                    currentUser={this.props.currentUser}

                    // while having filteredRecipes here is fine, there is no need to pass it as props
                    // will render recipes from RecipesContainer
                    recipes={filteredRecipes}
                    
                    // I don't think I use this
                    history={this.props.history}

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

                        // I don't think I will need this, or it will change with mapping the state
                        recipes={filteredRecipes}

                        // do I need this? I don't think so
                        history={this.props.history}
                    />
                )
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.cocktails.cocktails.included.filter(data => data.type === "user"),
        recipes: state.cocktails.cocktails.included.filter(data => data.type === "recipe"),
        test: state.users
    }
}

export default connect(mapStateToProps, {getAllUsers})(UsersContainer)