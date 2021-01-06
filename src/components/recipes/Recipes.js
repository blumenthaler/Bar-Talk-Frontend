import React from 'react'
import Recipe from './Recipe.js'
import { useHistory, useRouteMatch } from 'react-router-dom'

const Recipes = props => {
    if (!props.recipes) {
        return (
            <h2>loading...</h2>
        )
    }
    else {
        const history = useHistory()
        const match = useRouteMatch()
        return (            
            <ol>
                {props.recipes.map(recipe => <Recipe key={recipe.id} history={history} match={match} recipe={recipe} userId={props.user.id}  currentUser={props.currentUser} user={props.user} comments={props.comments} editingRecipe={props.editingRecipe} />)}
            </ol>
        )
    }
}

export default Recipes