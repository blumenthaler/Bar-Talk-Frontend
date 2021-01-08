import React from 'react'
import RecipesContainer from '../containers/RecipesContainer.js';
import { useHistory, useRouteMatch } from 'react-router-dom'
import pluralize from 'pluralize'

const User = props => {
        const history = useHistory()
        const match = useRouteMatch()
        let title;
        if (props.currentUser.data.id === props.user.id) {
            title = "Your Recipe:"
        }
        else {
            title =  `${props.user.attributes.username}'s Recipe:`
        }

        // pluralize title based on number of user's recipes
        let recipes = props.recipes.filter(recipe => recipe.relationships.user.data.id === props.user.id)
        let split = title.split(":")[0].split(" ")
        const plural = pluralize(split[split.length - 1], recipes.length)
        split[split.length -1] = plural
        console.log(split)
        title = split.join(" ")
        title += ':'

        
        return (
            <>
                <h4>{title}</h4> 
                
                <RecipesContainer 
                // these make sense to me to keep being passed
                // this way, I can make comparisons/filter the included data when I getAllRecipes in the container 
                    user={props.user} 
                    currentUser={props.currentUser} 
                    cocktail={props.cocktail} 

                // do I need to incoporate these here?
                // investigate
                history={history} match={match} 
                 />
            </>
        )
}

export default User