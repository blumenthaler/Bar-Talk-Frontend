import React from 'react'
import RecipesContainer from '../containers/RecipesContainer.js';
import { useHistory, useRouteMatch } from 'react-router-dom'

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

                // get recipes from getAllRecipes in the container; not passed from above
                recipes={props.recipes} 
                
                // again, not necessary here, get rid of it, render comments in the CommentsContainer
                comments={props.comments} />
            </>
        )
}

export default User