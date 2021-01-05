import React from 'react'
import CommentsContainer from '../containers/CommentsContainer.js'

const Recipe = props => {
        const currentUserId = props.currentUser.data.id
        const recipeUserId = props.recipe.relationships.user.data.id
        const {attributes} = props.recipe
        return (
            <li>
                {attributes.name}
                <br />
                {attributes.ingredients}
                <br />
                {attributes.garnish}
                <br />
                {attributes.notes}
                <br />
                {attributes.votes}
                <br />
                {currentUserId === recipeUserId ? <><button>Edit Recipe</button><br /><button>Delete Recipe</button></> : null}
                <CommentsContainer recipe={props.recipe} currentUser={props.currentUser} comments={props.comments}/>
                <br /><br />
            </li>
        )

}

export default Recipe