import React from 'react'
import Recipe from './Recipe.js'
import { useHistory, useRouteMatch } from 'react-router-dom'

const Recipes = props => {
    const history = useHistory()
    const match = useRouteMatch()
    if (!props.recipes) {
        return (
            <h2>loading...</h2>
        )
    }
    else {
        return (            
            <ol>
                {props.recipes.map(recipe => <Recipe key={recipe.id} history={history} match={match} recipe={recipe} userId={props.user.id}  currentUser={props.currentUser} user={props.user} editingRecipe={props.editingRecipe} deleteRecipe={props.deleteRecipe} />)}
            </ol>
        )
    }
}

export default Recipes