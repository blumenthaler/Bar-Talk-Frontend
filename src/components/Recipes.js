import React from 'react'
import Recipe from './Recipe.js'

class Recipes extends React.Component {

    render() {
        if (!this.props.recipes) {
            return (
                <h2>loading...</h2>
            )
        }
        else {
            // gathers all recipes by the current user
            const userRecipes = this.props.recipes.filter(recipe => this.props.currentUser.id == recipe.relationships.user.data.id)
            // console.log(this.props)
            // console.log(userRecipes)
            return (
                <ol>
                    {userRecipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
                </ol>
            )
        }
    }
}

export default Recipes