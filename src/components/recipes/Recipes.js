import React from 'react'
import Recipe from './Recipe.js'

const Recipes = props => {
    if (!props.recipes) {
        return (
            <h2>loading...</h2>
        )
    }
    else {
        return (            
            <ol>
                {props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} userId={props.user.id}  currentUser={props.currentUser} user={props.user}/>)}
            </ol>
        )
    }
}

export default Recipes