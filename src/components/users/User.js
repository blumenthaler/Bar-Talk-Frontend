import React from 'react'
import RecipesContainer from '../containers/RecipesContainer.js';

class User extends React.Component {
    render() {
        
        return (
            <>
            <h4>{this.props.user.username}'s Recipe:</h4> 
            <RecipesContainer recipes={this.props.recipes} user={this.props.user} currentUser={this.props.currentUser} />
            </>
        )
    }
}

export default User