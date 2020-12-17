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
            return (
                <ol>
                    {this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
                </ol>
            )
        }
    }
}

export default Recipes