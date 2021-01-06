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
                <RecipesContainer recipes={props.recipes} user={props.user} currentUser={props.currentUser} cocktail={props.cocktail} history={history} match={match} comments={props.comments} />
            </>
        )
}

export default User