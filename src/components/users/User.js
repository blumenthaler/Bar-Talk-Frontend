import React from 'react'
import RecipesContainer from '../containers/RecipesContainer.js';

const User = props => {
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
                <RecipesContainer recipes={props.recipes} user={props.user} currentUser={props.currentUser} cocktail={props.cocktail} history={props.history} comments={props.comments} />
            </>
        )
}

export default User