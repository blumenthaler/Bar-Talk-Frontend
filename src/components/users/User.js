import React from 'react'
import RecipesContainer from '../containers/RecipesContainer.js';

class User extends React.Component {
    render() {
        let title;
        if (this.props.currentUser.id === this.props.user.id) {
            title = "Your Recipe:"
        }
        else {
            title = `${this.props.user.username}'s Recipe:`
        }

        return (
            <>
                <h4>{title}</h4> 
                <RecipesContainer recipes={this.props.recipes} user={this.props.user} currentUser={this.props.currentUser} />
            </>
        )
    }
}

export default User