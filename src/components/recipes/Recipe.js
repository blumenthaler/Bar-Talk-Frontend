import React from 'react'
import CommentsContainer from '../containers/CommentsContainer.js'

class Recipe extends React.Component {
    

    render() {
        
        const {attributes} = this.props.recipe

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
                <br /><br />
                <CommentsContainer recipe={this.props.recipe} currentUser={this.props.currentUser}/>
                <br />
            </li>
        )
    }
}

export default Recipe