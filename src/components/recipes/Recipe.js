import React from 'react'
import CommentsContainer from '../containers/CommentsContainer.js'

const Recipe = props => {
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
                <CommentsContainer recipe={props.recipe} currentUser={props.currentUser} comments={props.comments}/>
                <br /><br />
            </li>
        )

}

export default Recipe