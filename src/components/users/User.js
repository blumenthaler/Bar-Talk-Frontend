import React from 'react'
import RecipesContainer from '../containers/RecipesContainer.js';

class User extends React.Component {
    render() {
        
        // const {attributes} = this.props.recipe
        console.log(this.props)
        
        return (
            <>
            <h4>{this.props.user.username}'s Recipe:</h4> 
            <RecipesContainer />
            </>
        )
    }
}

export default User